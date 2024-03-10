import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import axios from "axios";
import "../Style/filter.css";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

export const Filter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();
  // State for form inputs
  const [formData, setFormData] = useState({
    level: "",
    message: "",
    resourceId: "",
    traceId: "",
    startDate: "",
    endDate: "",
    spanId: "",
    commit: "",
    parentResourceId: "",
  });


const handleReset = () => {
  // Clear search results by resetting data
  setData([]);
  setFormData({
    level: "",
    message: "",
    resourceId: "",
    traceId: "",
    startDate: "",
    endDate: "",
    spanId: "",
    commit: "",
    parentResourceId: "",
  });

  
};

  useEffect(() => {
    const getGreeting = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 5 && currentTime < 12) {
        return "Good morning";
      } else if (currentTime >= 12 && currentTime < 17) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    };

    setGreeting(getGreeting());
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const navigatetoToggle = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/", { state: {} });
    }, 1);
  };

  const handleSubmit = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/level",
        formData
      );

      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [formData, data]);

  useEffect(() => {
    handleSubmit();
  }, [formData, handleSubmit]);

  return (
    <div className="root" style={{textAlign:"center"}}>
      <div className="filter-top" style={{ color: "wheat" }}>
        <div style={{ fontSize: "25px", color: "white" }}>
          {greeting} <span style={{ color: "orange" }}>{}</span>!
        </div>
        <div>
          <Typewriter
            options={{
              strings: ["Simple Query Interface", "Efficient Log Ingestor"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 100,
            }}
          />
        </div>
        <div style={{ fontSize: "25px", color: "white", marginBlockStart: "20px" }}>
          Filtering Your Logs: Quick and Seamless <br />
          <div style={{ fontSize: "18px" }}>
            {" "}
           {/* only <span style={{ color: "red" }}> admins</span> get access to
            <span style={{ color: "red" }}> Resource ID </span> and{" "}
          <span style={{ color: "red" }}>Trace ID</span>*/}
          </div>
        </div>
      </div>
    
      <form
        className="filter-input"
        style={{
          position: "relative",
          top: "120px",
          height: "max-content",
          backgroundColor: "black",
          marginInline: "90px",
          color: "black",
          padding: "50px",
          width:"1800px"
        }}
        onSubmit={handleSubmit}
      >
        <label style={{color:"white",fontSize:"20px",marginrights:"-20px"}} htmlFor="level">Level:</label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
          placeholder="Level"
        />
        <label style={{color:"white",fontSize:"20px",marginrights:"-20px"}} htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
        />
        <label style={{color:"white",fontSize:"20px",marginrights:"-20px"}} htmlFor="message">resourceId:</label>
        <input
          type="text"
          name="resourceId"
          value={formData.resourceId}
          onChange={handleInputChange}
          placeholder="Resource ID"
        />
        <label style={{color:"white",fontSize:"20px",marginrights:"-20px"}} htmlFor="message">traceId:</label>
        <input
          type="text"
          name="traceId"
          value={formData.traceId}
          onChange={handleInputChange}
          placeholder="Trace ID"
        />
        <br></br>
        <label style={{color:"white",fontSize:"20px",marginRight:"40px"}} htmlFor="message">spanId:</label>
        <input style={{marginLeft:"-30px"}}
          type="text"
          name="spanId"
          value={formData.spanId}
          onChange={handleInputChange}
          placeholder="Span ID"
        />
        <span></span>
        <label style={{color:"white",fontSize:"20px",marginRight:"10px"}} htmlFor="message">commit:</label>
        <input style={{margin:"10px"}}
          type="text" 
          name="commit"
          value={formData.commit}
          onChange={handleInputChange}
          placeholder="Commit"
        />
        <span></span>

        {/*add more input fields here*/}

        <span></span>
<label style={{color:"white",fontSize:"20px",marginleft:"20px"}} htmlFor="message">  parentResourceId:</label>
        <input style={{marginleft:"20px"}}
          type="text"
          name="parentResourceId"
          value={formData.parentResourceId}
          onChange={handleInputChange}
          placeholder="Parent Resource Id"
        />

        <br />
        <span style={{ color: "wheat" }}>Search From</span>{" "}
<input
  type="datetime-local"
  name="startDate"
  value={formData.startDate}
  onChange={handleInputChange}
  placeholder="Start Date"
/>
<span style={{ color: "wheat" }}> To</span>{" "}
<input
  type="datetime-local"
  name="endDate"
  value={formData.endDate}
  onChange={handleInputChange}
  placeholder="End Date"
/>

       <button
          type="button"
          onClick={handleReset}
          style={{
            margin: "10px",
            border: "none",
            padding: "15px",
            float: "right",
            fontSize: "20px",
            backgroundColor: "orange",
            color:"white",
            borderRadius: "10px",
            fontFamily: "Montserrat",
            cursor: "pointer",
          }}
        > Reset </button>
          <div
            className="filter-input"
            style={{
              position: "relative",
              top: "140px",
              height: "max-content",
              backgroundColor: "#1f1f1f",
              marginInline: "90px",
              color: "black",
              padding: "10px",
            }}
          >
            <div style={{ marginInline: "20px", color: "wheat" }}>
              {data.length} results found
            </div>

            {data.length > 0 && (
  <div>
    {data.map((item, index) => (
      <div
        key={index}
        style={{
          margin: "20px",
          backgroundColor: "white",
          height: "max-content",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            padding: "10px",
            lineHeight: "25px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Level: </span>
            {item.level}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Message: </span>
            {item.message}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Resource Id: </span>
            {item.resourceId}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Time Stamp: </span>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(item.timestamp))}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Trace Id: </span>
            {item.traceId}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Span Id: </span>
            {item.spanId}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Commit: </span>
            {item.commit}
          </div>
          <div style={{ flex: "1 0 50%", boxSizing: "border-box" }}>
            <span className="log-title">Parent Resource Id:</span>{" "}
            {item.metadata.parentResourceId}
          </div>
        </div>
      </div>
    ))}
  </div>
)}
</div>
                  
      </form>
    </div>
  );
};

export default Filter;