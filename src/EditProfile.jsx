import React, { useState } from "react";
import "./EditProfile.css";

function EditProfile() {
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([
    { name: "", number: "" },
    { name: "", number: "" },
    { name: "", number: "" },
  ]);

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][field] = value;
    setContacts(updatedContacts);
  };

  const handleSave = () => {
    alert(`已儲存電話：${phone}`);
    // 這裡也可以擴充，把聯絡人資料 console.log 或送出到伺服器
    console.log("緊急聯絡人：", contacts);
  };

  return (
    <div className="container">
      <h1>修改個人資料</h1>
      <input
        type="text"
        placeholder="電話"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <h2>設定緊急聯絡人</h2>
      {contacts.map((contact, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="新增緊急聯絡人"
            value={contact.name}
            onChange={(e) =>
              handleContactChange(index, "name", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="緊急聯絡人電話"
            value={contact.number}
            onChange={(e) =>
              handleContactChange(index, "number", e.target.value)
            }
          />
        </div>
      ))}

      <button onClick={handleSave}>儲存</button>
    </div>
  );
}

export default EditProfile;
