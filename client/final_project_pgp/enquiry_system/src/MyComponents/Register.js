import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [raddress, setRaddress] = useState("");
  const [oaddress, setOaddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [education, setEducation] = useState("");
  const [cours, setCours] = useState("");
  const [date, setDate] = useState("");
  const [fees, setFees] = useState("");
  const [num, setNum] = useState("");
  const [bank, setBank] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container>
      <h2>Annexure 1</h2>
      <p>
        <b> Vidyanidhi InfoTech Academy</b>
        <br /> 5th floor , Vidyanidhi Education Complex, JVPD Scheme, Juhu,
        Mumbai-400049
        <br />
        <b>Mob:</b> 9029435311
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label for="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label for="dob">Date of birth</label>
          <Input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="gender">Gender</label>
          <Input
            type="text"
            name="gen"
            id="gen"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="raddress">Residential Address</label>
          <Input
            type="text"
            name="radd"
            id="radd"
            value={raddress}
            onChange={(e) => setRaddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="oaddress">Office Address</label>
          <Input
            type="text"
            name="oadd"
            id="oadd"
            value={oaddress}
            onChange={(e) => setOaddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="email">E-mail</label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label for="phone">Phone(O)</label>
          <Input
            type="number"
            name="phone"
            id="phn"
            placeholder="Enter phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label for="mobile">Mobile</label>
          <Input
            type="number"
            name="mob"
            id="mobile"
            placeholder="Enter mobile here"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label for="edu">Educational qualification</label>
          <Input
            type="text"
            name="edu"
            id="edu"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="course">Course Enrolled for</label>
          <Input
            type="text"
            name="course"
            id="course"
            value={cours}
            onChange={(e) => setCours(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="date">Starting From</label>
          <Input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="fees">Fees Paid In Rupees </label>
          <Input
            type="text"
            name="fees"
            id="fees"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="num">Cheque/DD no. </label>
          <Input
            type="number"
            name="num"
            id="num"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label for="bankname">Bank Name </label>
          <Input
            type="text"
            name="bank"
            id="bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          />
        </FormGroup>

        <Button onClick={handlePrint}>Print</Button>
      </Form>
    </Container>
  );
};

export default Register;
