import { signUpImg } from "src/Assets/Images/Images";
import s from "./LogIn.module.scss";
import LogInForm from "./LogInForm/LogInForm";

const LogIn = () => {
  

  return (
    <>
     

      <main className={s.LogInPage} id="login-page">
        <div className={s.container}>
          <div className={s.imgHolder}>
            <img src={signUpImg} alt="Shopping cart and phone" />
          </div>

          <LogInForm />
        </div>
      </main>
    </>
  );
};
export default LogIn;
