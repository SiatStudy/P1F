import style from './LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import { ReactComponent as Eyeline } from "../svg/Eyeline.svg";

function FindPWResult () {

    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $logindiv>
                    <CustomLoginPageDiv $findIdPW>
                        <CustomLoginPageBtn $findNoneSelBtn>비밀번호 찾기</CustomLoginPageBtn>
                    </CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>비밀번호 :</CustomLoginPageLabel>
                        <CustomLoginPageDiv $pwinputdiv>
                            <CustomLoginPageInput $pwinput type='password' />
                            <Eyeline className={style.eyelineSvg}/>
                        </CustomLoginPageDiv>
                    </CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>비밀번호 확인 :</CustomLoginPageLabel>
                        <CustomLoginPageDiv $pwinputdiv>
                            <CustomLoginPageInput $pwinput type='password' />
                            <Eyeline className={style.eyelineSvg}/>
                        </CustomLoginPageDiv>
                    </CustomLoginPageDiv>

                    <CustomLoginPageBtn $loginbtn $mbspbtn>비밀번호 변경</CustomLoginPageBtn>
                </CustomLoginPageDiv>
            </CustomLoginPageDiv>
        </div>
    );
}

export default FindPWResult;