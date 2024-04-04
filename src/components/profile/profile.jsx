import React, { useState } from "react";
import Header from "../common/header/Header";
import "./profile.css";
import DefaultProfileImage from "./profile.svg"; // Gambar profil default jika tidak ada gambar yang diunggah

const Profile = () => {
  const [profileImage, setProfileImage] = useState(DefaultProfileImage); // State untuk menyimpan gambar profil

  // Fungsi untuk menangani perubahan gambar profil
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]; // Ambil gambar yang dipilih oleh pengguna
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set gambar profil dengan data URL gambar yang diunggah
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  // Fungsi untuk menangani klik tombol Save
  const handleSave = () => {
    // Logika untuk menyimpan data profil
    console.log("Data profil disimpan!");
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-container">
        <div className="profile-details">
          <img src={profileImage} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleImageChange} /> {/* Input untuk memilih gambar */}
          <h2>Nama Pengguna</h2>
          <p>Email: example@example.com</p>
          {/* Informasi profil lainnya */}
        </div>
        <div className="profile-actions">
          <button>Edit Profil</button>
          <button onClick={handleSave}>Save</button> {/* Tombol Save */}
          <button>Ubah Password</button>
          {/* Tombol aksi profil lainnya */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
