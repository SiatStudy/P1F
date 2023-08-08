import style from './LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import { ReactComponent as Eyeline } from "../svg/Eyeline.svg";
import {Link} from 'react-router-dom';
import CustomLoginPageP from '../component/CustomLoginPageP';
import { useState } from 'react';

function LoginPage () {

    const [idVal, setIdVal] = useState('');
    const [pwVal, setPwVal] = useState('');

    return(
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $haedertext>로그인</CustomLoginPageDiv>

                <CustomLoginPageDiv $idpwsection>
                    <CustomLoginPageLabel $idlabel>ID :</CustomLoginPageLabel>
                    <CustomLoginPageInput $idinput value={idVal} />
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $idpwsection>
                    <CustomLoginPageLabel $idlabel>Password :</CustomLoginPageLabel>
                    <CustomLoginPageDiv $pwinputdiv>
                        <CustomLoginPageInput $pwinput type='password' value={pwVal} />
                        <Eyeline className={style.eyelineSvg}/>
                    </CustomLoginPageDiv>
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $find>
                <Link to="/FindIdPage"><CustomLoginPageBtn $findIdPWbtn>ID 찾기</CustomLoginPageBtn></Link>
                    /
                <Link to="/FindPWPage"><CustomLoginPageBtn $findIdPWbtn>비밀번호 찾기</CustomLoginPageBtn></Link>
                </CustomLoginPageDiv>

                <CustomLoginPageBtn $loginbtn>로그인</CustomLoginPageBtn>

                <CustomLoginPageDiv $membershipsection>
                    아직 회원이 아니십니까?
                    <Link to="/SignUpPage"><CustomLoginPageBtn $membershipbtn>회원가입</CustomLoginPageBtn></Link>
                </CustomLoginPageDiv>
            </CustomLoginPageDiv>
        </div>
    )
}

export default LoginPage;