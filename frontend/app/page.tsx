"use client";
import AuthModal from "@/components/AuthModal";
import ClothingItemsGrid from "@/components/ClothingItemsGrid";
import ClothingUploadForm from "@/components/ClothingUploadForm";
import DashboardBentoGrid from "@/components/DashBoardBentoGrid";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardStats from "@/components/DashboardStats";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import OutfitsGrid from "@/components/OutfitsGrid";
import Sidebar from "@/components/SideBar";
import SingleClothingItem from "@/components/SingleClothingItem";

export default function Home() {
  return (
    <div className="">
      {/* <Header />
      <Hero /> */}
      {/* <Modal>
        <AuthModal />
        <ClothingUploadForm />
      </Modal> */}
      <Sidebar />
      {/* <DashboardHeader /> */}
      {/* <DashboardStats /> */}
      {/* <DashboardBentoGrid /> */}
      {/* <ClothingItemsGrid /> */}
      {/* <OutfitsGrid /> */}
      <SingleClothingItem />
    </div>
  );
}
