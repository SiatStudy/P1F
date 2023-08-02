import style from './LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageInput from '../component/CustomLoginPageInput';

function EmailVerification () {

    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $logindiv>
                    <CustomLoginPageDiv $haedertext $emailVerificationDiv>이메일 인증해주세요.</CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>E-mail :</CustomLoginPageLabel>
                        <CustomLoginPageInput $idinput placeholder='E-mail 입력' />
                    </CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>인증번호 :</CustomLoginPageLabel>
                        <CustomLoginPageInput $idinput placeholder='인증번호 입력' />
                    </CustomLoginPageDiv>

                    <CustomLoginPageBtn $loginbtn $mbspbtn>비밀번호 찾기</CustomLoginPageBtn>
                </CustomLoginPageDiv>
            </CustomLoginPageDiv>
        </div>
    );
}

export default EmailVerification;