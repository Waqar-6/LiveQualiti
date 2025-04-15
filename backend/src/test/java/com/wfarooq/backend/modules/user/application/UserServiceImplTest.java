package com.wfarooq.backend.modules.user.application;

import com.wfarooq.backend.common.exception.ResourceAlreadyExistsException;
import com.wfarooq.backend.common.exception.ResourceNotFoundException;
import com.wfarooq.backend.modules.users.application.UserServiceImpl;
import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;
import com.wfarooq.backend.modules.users.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private CreateUserRequest request;
    private LivQualitiUser user;

    @BeforeEach
    void setUp() {
        request = new CreateUserRequest(
                "John", "Doe", "johndoe", "john@example.com", "password123"
        );
        user = new LivQualitiUser();
        user.setId(UUID.randomUUID());
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setUsername("johndoe");
        user.setEmail("john@example.com");
        user.setPassword("hashedpassword");
    }

    @Test
    void createUser_validRequest_shouldCreateUserAndReturnUserResponse() {
        // You write the logic here

        when(userRepository.existsByEmail(request.getEmail())).thenReturn(false);
        when(userRepository.existsByUsername(request.getUsername())).thenReturn(false);
        when(userRepository.save(any(LivQualitiUser.class))).thenReturn(user);

        UserResponse result = userService.createUser(request);

        verify(userRepository, times(1)).save(any(LivQualitiUser.class));

        assertEquals(request.getFirstName(), result.getFirstName());
        assertEquals(request.getLastName(), result.getLastName());
        assertEquals(request.getEmail(), result.getEmail());
        assertEquals(request.getUsername(), result.getUsername());

    }

    @Test
    void createUser_withExistingEmail_shouldThrowResourceAlreadyExistsException() {
        // You write the logic here
        when(userRepository.existsByEmail(request.getEmail())).thenReturn(true);
        assertThrows(ResourceAlreadyExistsException.class, () -> userService.createUser(request));
        verify(userRepository, never()).save(any(LivQualitiUser.class));
    }

    @Test
    void createUser_withExistingUsername_shouldThrowResourceAlreadyExistsException() {
        // You write the logic here
        when(userRepository.existsByUsername(request.getUsername())).thenReturn(true);
        assertThrows(ResourceAlreadyExistsException.class, () -> userService.createUser(request));
        verify(userRepository, never()).save(any(LivQualitiUser.class));
    }

    @Test
    void getUserById_withValidId_shouldReturnUserResponse() {
        // You write the logic here
        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        UserResponse result = userService.getUserById(user.getId());
        verify(userRepository, times(1)).findById(any(UUID.class));
    }

    @Test
    void getUserById_withNonValidId_shouldThrowResourceNotFoundException() {
        // You write the logic here
        when(userRepository.findById(user.getId())).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> userService.getUserById(user.getId()));
        verify(userRepository, times(1)).findById(any(UUID.class));
    }

    @Test
    void deleteUser_withValidId_shouldDeleteUser() {
        // You write the logic here
        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        userService.deleteUserById(user.getId());
        verify(userRepository, times(1)).delete(any(LivQualitiUser.class));
    }

    @Test
    void deleteUser_withNonValidId_shouldDeleteUser() {
        // You write the logic here
        when(userRepository.findById(user.getId())).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> userService.deleteUserById(user.getId()));
        verify(userRepository, never()).delete(any(LivQualitiUser.class));
    }

    @Test
    void getAllUsers_shouldReturnListOfUserResponse() {
        // You write the logic here
        when(userRepository.findAll()).thenReturn(List.of(user));
        List<UserResponse> allUsers = userService.getAllUsers();
        verify(userRepository, times(1)).findAll();
        assertEquals(1, allUsers.size());
        assertNotNull(allUsers);
        assertEquals("johndoe", allUsers.getFirst().getUsername());
    }
}


