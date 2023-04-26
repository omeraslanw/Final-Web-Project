import React, { useState } from "react";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../stores/auth";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); //Buton aktif olduğunda sayfanın yenilenmesini önler.
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
    dispatch(login(user));
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
              placeholder="Şifrenizi girin"
              type="password"
            />
          </FormGroup>

          <Button disabled={!email || !password}>Giriş Yap</Button>
          <div>
            <p>
              Hesabınız yok mu? <Link to={"/signup"}>Kaydol</Link>{" "}
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default LogIn;
