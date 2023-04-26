import React, { useState } from "react";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //Buton aktif olduğunda sayfanın yenilenmesini önler.
    setEmail("");
    setPassword("");
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const ref = doc(db, "users", result.user.uid);
        const docRef = setDoc(ref, {
          email,
          password,
          created: Timestamp.now(), //hesabın oluşturulma tarihini hafızada tuttar.
        });
        setDoc(doc(db, "posts", result.user.uid), { posts: [] });
        //return user;
        navigate("/") //kayıt işleminden sonra seni ana sayfaya yönlendirir.
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form className="forms" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <FormGroup>
            <Label for="exampleEmail">E-Posta</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="exampleEmail"
              name="email"
              placeholder="E-posta adresinizi girin"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Şifre</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="examplePassword"
              name="password"
              placeholder="Şifrenizi belirleyin"
              type="password"
            />
          </FormGroup>

          <Button disabled={!email || !password}>Kaydol</Button>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
