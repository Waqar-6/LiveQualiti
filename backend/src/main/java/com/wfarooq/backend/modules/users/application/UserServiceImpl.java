package com.wfarooq.backend.modules.users.application;

import com.wfarooq.backend.common.exception.ResourceAlreadyExistsException;
import com.wfarooq.backend.common.exception.ResourceNotFoundException;
import com.wfarooq.backend.modules.auth.domain.Role;
import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;
import com.wfarooq.backend.modules.users.mapper.UserMapper;
import com.wfarooq.backend.modules.users.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.Set;
import java.util.UUID;
@Service
public class UserServiceImpl implements IUserService{
    private final UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponse createUser(CreateUserRequest request) {
        Instant start = Instant.now();
        if (userRepository.existsByEmail(request.getEmail())) {
            logger.info("[CREATE] User already exists with the email : {} ", request.getEmail());
            throw new ResourceAlreadyExistsException("User", "email", request.getEmail());
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            logger.info("[CREATE] User already exists with the username : {} ", request.getUsername());
            throw new ResourceAlreadyExistsException("User", "username", request.getUsername());
        }

        LivQualitiUser newUser = UserMapper.toEntity(request, new LivQualitiUser());

        Role role = new Role();
        role.setName(request.getRole());
        role.setUser(newUser);

        newUser.setRoles(Set.of(role));

        LivQualitiUser saved = userRepository.save(newUser);

        logger.debug("[CREATE] new user saved : {}", saved);

        logger.info("[METRIC] created new user in {}ms", Duration.between(start, Instant.now()).toMillis());
        return UserMapper.toResponse(saved, new UserResponse());
    }

    @Override
    public UserResponse getUserById(UUID id) {
        Instant start = Instant.now();

        logger.info("[READ] Fetching User with ID: {}", id);

        LivQualitiUser livQualitiUser = userRepository.findById(id).orElseThrow(() -> {
            logger.warn("[READ] Clothing item not found with ID: {}", id);
            return new ResourceNotFoundException("User", "id", id.toString());

        });

        logger.debug("[READ] Found user : {}", livQualitiUser);
        logger.info("[METRIC] Retrieved user in {}ms", Duration.between(start, Instant.now()).toMillis());
        return UserMapper.toResponse(livQualitiUser, new UserResponse());
    }

    @Override
    public List<UserResponse> getAllUsers() {
        Instant start = Instant.now();

        logger.info("[READ] Fetching all users");

        List<LivQualitiUser> allUsers = userRepository.findAll();
        logger.debug("[READ] Total Users fetched : {} ", allUsers.size());
        logger.info("[METRIC] All users fetched in {}ms", Duration.between(start, Instant.now()).toMillis());
        return allUsers.stream().map(user -> UserMapper.toResponse(user, new UserResponse())).toList();
    }

    @Override
    public boolean deleteUserById(UUID id) {
        Instant start = Instant.now();

        logger.info("[DELETE] Deleting user with the id : {}", id);
        LivQualitiUser user = userRepository.findById(id).orElseThrow(() -> {
            logger.warn("[DELETE] User not found with the id : {}", id);
            return new ResourceNotFoundException("User", "id", id.toString());
        });

        userRepository.delete(user);
        logger.debug("[DELETE] Deleted user with id : {}", id);
        logger.info("[METRIC] Deleted user in {}ms", Duration.between(start, Instant.now()).toMillis());
        return true;
    }
}
