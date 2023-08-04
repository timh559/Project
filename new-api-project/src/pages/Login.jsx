import React from "react";
import { Container, Button } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const currentUser = useAuth();
  const isLoggedIn = currentUser.currentUser !== null;
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "white",
          margin: "1% auto",
        }}
      >
        {isLoggedIn && (
          <Container>
            <p>
              Logged in as: {currentUser.currentUser.email}
              <Button
                className="mt-2 mb-2 p-2 mx-auto"
                variant="link"
                size="sm"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </p>
          </Container>
        )}
      </div>
      <Container className="d-flex align-items-center justify-content-center">
      {isLoggedIn ? 
        <div>
          <h1>You are logged in!</h1>
        </div>
        :
        <LoginForm />
        }
      </Container>
    </>
  );
}
