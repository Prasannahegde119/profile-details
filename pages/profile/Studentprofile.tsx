import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faFileExport } from "@fortawesome/free-solid-svg-icons";
import "./Studentprofile.css";

const studentData = {
  usnNo: "123456789",
  firstName: "Chandan",
  dateOfBirth: "2000-05-15",
  placeOfBirth: "Bangalore",
  dateOfJoining: "2018-06-01",
  adharNumber: "987654321012",
  panNumber: "ABCDE1234F",
  bloodGroup: "O+",
  gender: "Male",
  contactNumber: "(123) 456-7890",
  email: "student@example.com",
  fathersName: "Ravi Kumar",
  mothersName: "Anita Kumar",
  fatherPhoneNumber: "(123) 555-7890",
  fatherEmail: "father@example.com",
  localAddress: "123 Local St, Bangalore",
  permanentAddress: "456 Permanent St, Bangalore",
  category: "General",
  religion: "Hindu",
  previousCollege: "ABC College",
  admissionType: "Regular",
  paymentType: "Full Payment",
  nationality: "Indian",
};

const StudentProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      {/* Left Section */}
      <div className="profile-details">
        <button className="profile-btn">Profile Details</button>
      </div>

      {/* Right Section */}
      <div className="action-buttons">
        <button className="action-btn">
          <FontAwesomeIcon icon={faPrint} /> Print
        </button>
        <button className="action-btn">
          <FontAwesomeIcon icon={faFileExport} /> Export
        </button>
      </div>

      {/* Table Section */}
      <div className="profile-table">
        <table>
          <tbody>
            <tr>
              <td>USN No</td>
              <td>{studentData.usnNo}</td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{studentData.firstName}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{studentData.dateOfBirth}</td>
            </tr>
            <tr>
              <td>Place of Birth</td>
              <td>{studentData.placeOfBirth}</td>
            </tr>
            <tr>
              <td>Date of Joining</td>
              <td>{studentData.dateOfJoining}</td>
            </tr>
            <tr>
              <td>Adhar Number</td>
              <td>{studentData.adharNumber}</td>
            </tr>
            <tr>
              <td>PAN Number</td>
              <td>{studentData.panNumber}</td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td>{studentData.bloodGroup}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{studentData.gender}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{studentData.contactNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{studentData.email}</td>
            </tr>
            <tr>
              <td>Fathers Name</td>
              <td>{studentData.fathersName}</td>
            </tr>
            <tr>
              <td>Mothers Name</td>
              <td>{studentData.mothersName}</td>
            </tr>
            <tr>
              <td>Father Phone Number</td>
              <td>{studentData.fatherPhoneNumber}</td>
            </tr>
            <tr>
              <td>Father Email</td>
              <td>{studentData.fatherEmail}</td>
            </tr>
            <tr>
              <td>Local Address</td>
              <td>{studentData.localAddress}</td>
            </tr>
            <tr>
              <td>Permanent Address</td>
              <td>{studentData.permanentAddress}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{studentData.category}</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>{studentData.religion}</td>
            </tr>
            <tr>
              <td>Previous College</td>
              <td>{studentData.previousCollege}</td>
            </tr>
            <tr>
              <td>Admission Type</td>
              <td>{studentData.admissionType}</td>
            </tr>
            <tr>
              <td>Payment Type</td>
              <td>{studentData.paymentType}</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>{studentData.nationality}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfilePage;
