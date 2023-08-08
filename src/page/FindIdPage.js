import style from '../page/LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import {NavLink} from 'react-router-dom';

const FindIdPage = () => {

    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $findIdPW>
                    <CustomLoginPageBtn $findSelBtn>ID 찾기</CustomLoginPageBtn>
                    <NavLink to="/FindPWPage" className={style.findNoneSel}><CustomLoginPageBtn $findNoneSelBtn>비밀번호 찾기</CustomLoginPageBtn></NavLink>
                </CustomLoginPageDiv>

                <CustomLoginPageDiv $idpwsection $findidsection>
                    <CustomLoginPageLabel $idlabel>E-mail :</CustomLoginPageLabel>
                    <CustomLoginPageInput $idinput placeholder='E-mail 입력' />
                </CustomLoginPageDiv>

                <CustomLoginPageBtn $loginbtn $mbspbtn>ID 찾기</CustomLoginPageBtn>
            </CustomLoginPageDiv>
        </div>
    );
}

export default FindIdPage;