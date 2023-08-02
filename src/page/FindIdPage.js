import style from '../page/LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageInput from '../component/CustomLoginPageInput';
import CustomLoginPageLabel from '../component/CustomLoginPageLabel';
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import {NavLink} from 'react-router-dom';
// import {findNoneSel} from '../util/LoginPageUtil';

const FindIdPage = () => {

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

    // const findNoneSelBtn = findNoneSel();



    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $findIdPW>
                    <CustomLoginPageBtn $findSelBtn>ID 찾기</CustomLoginPageBtn>
                    <NavLink to="/FindPWPage" style={findNoneSelBtn}><CustomLoginPageBtn $findNoneSelBtn>비밀번호 찾기</CustomLoginPageBtn></NavLink>
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