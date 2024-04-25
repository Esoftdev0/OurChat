import React, { useContext } from "react";

// style file
import "./JoinAl_Hikimah.scss";

// assets
import joinAl_Hikimah from "../../assets/Images/joinAl_Hikimah.svg";

// components
import LoginButton from "../../components/Buttons/LoginButton";
import SignupButton from "../../components/Buttons/SignupButton";

// context (global state)
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

const JoinAl_Hikimah = () => {
  // ******* start global state ******* //

  // theme context
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // language context
  const { isEnglish, english, german } = useContext(LanguageContext);
  var language = isEnglish ? english : german;

  // ******* end global state ******* //
  return (
    <div className='joinAl_Hikimah' >
      <div className='joinAl_Hikimah__box' style={{ backgroundColor: theme.foreground }}>
        <div className='joinAl_Hikimah__box__imageBox'>
          <img alt='join Al_Hikimah' src={joinAl_Hikimah} />
        </div>
        <div className='joinAl_Hikimah__box__body'>
          <div className='joinAl_Hikimah__box__body__Title'>
            <h2 style={{ color: theme.typoMain }}>{language.rightSide.JoinAl_Hikimah}</h2>
            <p style={{ color: theme.typoSecondary }}>{language.rightSide.JoinAl_HikimahSub}</p>
          </div>
          <div className='joinAl_Hikimah__box__body__buttons'>
            <SignupButton />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAl_Hikimah;
