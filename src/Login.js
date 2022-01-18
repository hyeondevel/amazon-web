import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useStateValue} from "./StateProvider";

function Login() {

    const [{user}, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                if(userCredential){ // 성공시 메인페이지
                    console.log('로그인 하였습니다.');
                    navigate('/');
                }
            })
            .catch(err => alert(`에러내용 : ${err.message}, 에러코드 : ${err.code}`));
    }

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                if(userCredential){ // 성공시 메인페이지
                    console.log('회원가입이 완료되었습니다.');
                    navigate('/');
                }
            })
            .catch(err => alert(`에러내용 : ${err.message}, 에러코드 : ${err.code}`));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1>로그인</h1>

                <form>
                    <h5>이메일</h5>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                    />
                    <h5>비밀번호</h5>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />

                    <button
                        className="signInButton"
                        onClick={signIn}
                    >로그인 하기</button>
                </form>

                <p>이용 약관에 동의하십니까?</p>
                <button
                    className="login_registerButton"
                    onClick={register}
                >회원가입</button>
            </div>

        </div>
    );
}

export default Login;