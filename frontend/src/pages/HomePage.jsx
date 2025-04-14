import { Button } from "@/components/ui/button";
import Header from "@/mycomponents/header/Header";
import Hero from "@/mycomponents/hero/Hero";
import AddClothingItem from "@/mycomponents/modal/AddClothingItem";
import ClothingItemForm from "@/mycomponents/modal/ClothingItemForm";
import Modal from "@/mycomponents/modal/Modal";
import React, { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />
      <Hero />

      <AddClothingItem />

      <Modal
        title="Add New Clothing Item"
        description="Fill in the details below to add a new item to your wardrobe."
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <ClothingItemForm />
      </Modal>
    </div>
  );
};

export default HomePage;
