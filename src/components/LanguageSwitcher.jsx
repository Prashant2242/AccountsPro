import React, { useRef, useState, useEffect } from "react";
import { FiGlobe } from "react-icons/fi";
import Translation from "./Translation"; // Adjust path if needed

const LanguageSwitcher = () => {
  const [langOpen, setLangOpen] = useState(false);
  const toggleLangMenu = () => setLangOpen((prev) => !prev);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="d-flex d-lg-none align-items-center gap-3 ms-auto">
      <div className="position-relative" ref={langRef}>
        <FiGlobe
          size={20}
          className="text-dark cursor-pointer"
          onClick={toggleLangMenu}
        />

        {langOpen && (
          <div
            className="position-absolute"
            style={{
              top: "30px",
              right: 0,
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "5px",
              zIndex: 9999,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <Translation />
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
