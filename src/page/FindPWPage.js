import style from '../page/LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import {NavLink} from 'react-router-dom';

const FindPWPage = () => {

    const findNoneSelBtn = {
        display: 'flex',
        height: '2.5rem',
        padding: '0.75rem 1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        flex: '1 0 0',
        borderBottom: '3px solid #3E54AC',
        textDecoration: 'none',
    };

    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $logindiv>
                    <CustomLoginPageDiv $findIdPW>
                    <NavLink to="/FindIdPage" style={findNoneSelBtn}><CustomLoginPageBtn $findNoneSelBtn>ID 찾기</CustomLoginPageBtn></NavLink>
                        <CustomLoginPageBtn $findSelBtn>비밀번호 찾기</CustomLoginPageBtn>
                    </CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>ID :</CustomLoginPageLabel>
                        <CustomLoginPageInput $idinput placeholder='ID 입력' />
                    </CustomLoginPageDiv>

                    <CustomLoginPageDiv $idpwsection $findpwsection>
                        <CustomLoginPageLabel $idlabel>E-mail :</CustomLoginPageLabel>
                        <CustomLoginPageInput $idinput placeholder='E-mail 입력' />
                    </CustomLoginPageDiv>

                    <CustomLoginPageBtn $loginbtn $mbspbtn>비밀번호 찾기</CustomLoginPageBtn>
                </CustomLoginPageDiv>
            </CustomLoginPageDiv>
        </div>
    );
}

export default FindPWPage;