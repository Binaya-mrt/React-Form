import React, { useState, useRef } from "react";
import { ReactComponent as Search } from "./assets/svgs/search.svg";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import axios from "axios";

function Form() {
  const [file, setFile] = useState(null);
  const [gender, setGender] = useState("male");
  const fileInputRef = useRef(null);
  const [student, setStudent] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    program: "",
    class: "",
    section: "",
    dob: "",
    gender: gender,
    addState: "",
    addDistrrict: "",
    addMunicipality: "",
    addLocation: "",
    gfirstname: "",
    gmiddlename: "",
    glastname: "",
    gemail: "",
    gphone: "",
    realtion: "",
    image: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setStudent({ ...student, [name]: value });
  };

  function handleButtonClick() {
    fileInputRef.current.click();
  }
  function handleFileInputChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  const gendercontroller = (gender) => {
    console.log(gender);
    setGender(gender);
  };
  let formData = new FormData();

  formData.append("firstname", student.firstname);
  formData.append("middlename", student.middlename);
  formData.append("image", file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
      url: "/api/post",
      method: "POST",
      data: formData,
    });
    console.log(response);
  };

  return (
    <div className="max-w-screen h-full  bg-black">
      <div className="bg-white mx-auto rounded-xl max-w-[70%] pb-5">
        <div className="mx-4 py-2 pb-2 flex justify-between items-center">
          <p>Add User</p>
          <p>X</p>
        </div>
        <hr></hr>
        <div className="px-5 py-5 flex justify-between items-center">
          <div className="">
            <ul className="flex items-center">
              <li className="w-32 text-center py-3 bg-primaryblue text-white rounded-md">
                <button className="text-md md:text-base">Student</button>
              </li>
              <li className={"px-8 py-3"}>
                <button>Teachers</button>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mx-auto f relative">
            <div
              className="h-32  w-32 rounded-md my-5 mx-auto  bg-spanishGray/10"
              onClick={handleButtonClick}
            >
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected Image"
                  className="h-full w-full "
                />
              ) : (
                <img
                  src="https://th.bing.com/th?id=OIP.0siT9Vkwx8tb_kFTi-KV1wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  className="h-full w-full "
                  alt="Default image"
                />
              )}

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </div>
            <button
              onClick={handleButtonClick}
              className="relative   left-[55%] bottom-10 bg-spanishGray text-white rounded-[50%] px-2"
              useRef={fileInputRef}
            >
              +
            </button>
          </div>
          {/* Input fields starts from this field */}
          <div className="mx-4">
            <div className="flex justify-between gap-10  items-center">
              <TextInput
                title={"First Name"}
                placeholder={"First Name"}
                value={student.firstname}
                required
                onChange={handleChange}
                name="firstname"
              />
              <TextInput
                title={"Middle Name"}
                placeholder={"Middle Name"}
                value={student.middlename}
                required
                name="middlename"
                onChange={handleChange}
              />{" "}
              <TextInput
                title={"Last Name"}
                name="lastname"
                placeholder={"Last Name"}
                value={student.lastname}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-10">
              <TextInput
                title={"Email"}
                placeholder={"Email"}
                name={"email"}
                value={student.email}
                required
                onChange={handleChange}
                className="w-full"
              />
              <TextInput
                title={"Phone number"}
                placeholder={"Phone Number"}
                value={student.phone}
                required
                onChange={handleChange}
                name="phone"
              />
            </div>
            {/* Dropdown */}
            <div className="flex gap-10">
              <Dropdown
                name={"program"}
                value={student.program}
                onChange={handleChange}
                title={"Program"}
                values={["BIT", "CSIT", "BIM"]}
                placeholder={"Select a program"}
                required
              />
              <Dropdown
                name={"class"}
                value={student.class}
                onChange={handleChange}
                title={"Class"}
                values={["BIT", "CSIT", "BIM"]}
                required
                placeholder={"Select a class"}
              />{" "}
              <Dropdown
                name={"section"}
                value={student.section}
                onChange={handleChange}
                title={"Section"}
                required
                values={["Tiger", "Rhino", "Elephant"]}
                placeholder={"Select a section"}
              />
            </div>
            {/* DOB and GENDER REMAINING */}

            <p>
              Date of birth
              <span>
                <sup className={"text-red-700"}>*</sup>
              </span>
            </p>
            <div className="flex items-center  gap-10 w-full">
              <div className="my-2 items-center justify-center w-full">
                <div className="felx flex-start flex-col">
                  <input
                    placeholder="yyyy/mm/dd"
                    value={student.dob}
                    name="dob"
                    onChange={handleChange}
                    type="date"
                    className="bg-spanishGray/10 w-full pr-1 pl-2 py-2 rounded-md text-base"
                  />
                </div>
              </div>
              <div className="w-full items-center">
                <ul className="flex items-center">
                  {/* / bg-primaryblue text-white rounded-md text-md md:text-base */}
                  <li className="">
                    <button
                      onClick={() => gendercontroller("male")}
                      className={
                        gender === "male"
                          ? " bg-primaryblue px-3 py-2 text-white rounded-md text-md md:text-base"
                          : "px-8"
                      }
                    >
                      Male
                    </button>
                  </li>
                  <li className=''>
                    <button
                      onClick={() => gendercontroller("female")}
                      className={
                        gender === "female"
                          ? " bg-primaryblue px-3 py-2 text-white rounded-md text-md md:text-base"
                          : "px-8"
                      }
                    >
                      Female
                    </button>
                  </li>
                  <li className=''>
                    <button
                      onClick={() => gendercontroller("non")}
                      className={
                        gender === "non"
                          ? " bg-primaryblue px-3 py-2 text-white rounded-md text-md md:text-base"
                          : "px-8  "
                      }
                    >
                      Non Binary
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Address */}
            <p className="mt-2">
              Address
              <span>
                <sup className={"text-red-700"}>*</sup>
              </span>
            </p>
            <div>
              <div className="flex gap-10">
                <Dropdown
                  value={student.addState}
                  name={"addState"}
                  placeholder={"State"}
                  onChange={handleChange}
                  values={["Bagmati", "Lumbini", "Koshi"]}
                />
                <Dropdown
                  value={student.addDistrict}
                  name={"addDistrict"}
                  placeholder={"District"}
                  onChange={handleChange}
                  values={["Kathmandu", "Chitwan", "Lalitpur"]}
                />
              </div>
              <div className="flex gap-10">
                <Dropdown
                  value={student.addMunicipality}
                  name={"addMunicipality"}
                  placeholder={"Municipality"}
                  onChange={handleChange}
                  values={["Chandragiri", "Trakeshwor", "Kathmandu Metro"]}
                />
                <Dropdown
                  value={student.addLocation}
                  name={"addLocation"}
                  placeholder={"Location"}
                  onChange={handleChange}
                  values={["Kalanki", "Lagankhel", "Kathmandu Metro"]}
                />
              </div>
            </div>

            <div>
              {/* Gurdians info */}
              <p className="mt-2">
                Address
                <span>
                  <sup className={"text-red-700"}>*</sup>
                </span>
              </p>
              <div className="flex gap-10">
                <TextInput
                  name={"gfirstname"}
                  value={student.gfirstname}
                  onChange={handleChange}
                  placeholder={"First Name"}
                  required
                  title={"First Name"}
                />
                <TextInput
                  name={"gmiddlename"}
                  value={student.gmiddlenamename}
                  onChange={handleChange}
                  placeholder={"Middle Name"}
                  required
                  title={"Middle Name"}
                />
                <TextInput
                  name={"glastname"}
                  value={student.glastnamename}
                  onChange={handleChange}
                  placeholder={"Last Name"}
                  required
                  title={"Last Name"}
                />
              </div>
              <div className="flex gap-10">
                <TextInput
                  name={"gemail"}
                  value={student.gemail}
                  onChange={handleChange}
                  placeholder={"medhavhi@example.com"}
                  required
                  title={"Email Address"}
                />
                <TextInput
                  name={"gphone"}
                  value={student.gphone}
                  onChange={handleChange}
                  placeholder={"+977-976443387"}
                  required
                  title={"Phone Number"}
                />
              </div>

              <p className="mt-2">
                Relation
                <span>
                  <sup className={"text-red-700"}>*</sup>
                </span>
              </p>

              <Dropdown
                onChange={handleChange}
                placeholder={"Relatin with User"}
                name={"relation"}
                value={student.realtion}
                values={["Father", "Mother", "Uncle", "Brother"]}
                width={"w-md"}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-primaryblue rounded-full px-10 py-2 mx-2 text-white "
              type="submit"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
