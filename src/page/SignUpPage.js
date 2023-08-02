import style from './LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import CustomLoginPageSelect from '../component/CustomLoginPageSelect';
import { ReactComponent as Eyeline } from "../svg/Eyeline.svg";

function SignUpPage () {
    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $haedertext>회원가입</CustomLoginPageDiv>

                <CustomLoginPageDiv $mbidsection>
                    <CustomLoginPageDiv $mbidlabelinp>
                        <CustomLoginPageLabel $idlabel>아이디 :</CustomLoginPageLabel>
                        <CustomLoginPageInput $mbspid placeholder='ID 입력'/>
                    </CustomLoginPageDiv>
                    <CustomLoginPageBtn $mbspidcheck>중복</CustomLoginPageBtn>
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $idpwsection>
                    <CustomLoginPageLabel $idlabel>비밀번호 입력 :</CustomLoginPageLabel>
                    <CustomLoginPageDiv $pwinputdiv>
                        <CustomLoginPageInput $pwinput placeholder='Password' type='password' />
                        <Eyeline className={style.eyelineSvg}/>
                    </CustomLoginPageDiv>
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $idpwsection>
                    <CustomLoginPageLabel $idlabel>비밀번호 확인 :</CustomLoginPageLabel>
                    <CustomLoginPageDiv $pwinputdiv>
                        <CustomLoginPageInput $pwinput placeholder='Password' type='password' />
                        <Eyeline className={style.eyelineSvg}/>
                    </CustomLoginPageDiv>
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $mbidsection>
                    <CustomLoginPageDiv $mbidlabelinp>
                        <CustomLoginPageLabel $idlabel>이메일 :</CustomLoginPageLabel>
                        <CustomLoginPageInput $idinput placeholder='E-mail 입력'/>
                    </CustomLoginPageDiv>
                    <CustomLoginPageDiv $mbemail>@</CustomLoginPageDiv>
                    <CustomLoginPageSelect $mbemail>
                        <option value='@naver.com' className={style.emailOption}>naver.com</option>
                        <option value='@gmail.com' className={style.emailOption}>gmail.com</option>
                        <option value='@kakao.com' className={style.emailOption}>kakao.com</option>
                        <option value='@nate.com' className={style.emailOption}>nate.com</option>
                    </CustomLoginPageSelect>
                </CustomLoginPageDiv>

                <CustomLoginPageBtn $loginbtn $mbspbtn>회원가입 완료</CustomLoginPageBtn>
            </CustomLoginPageDiv>
        </div>
    )
}

export default SignUpPage;