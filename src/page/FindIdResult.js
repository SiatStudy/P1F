import style from './LoginPage.module.css';
import CustomLoginPageDiv from "../component/CustomLoginPageDiv";
import CustomLoginPageBtn from '../component/CustomLoginPageBtn';
import CustomLoginPageP from '../component/CustomLoginPageP';

function FindIdResult () {

    return (
        <div className={style.loginPage}>
            <CustomLoginPageDiv $logindiv>
                <CustomLoginPageDiv $findIdPW>
                    <CustomLoginPageBtn $findSelBtn>ID 찾기</CustomLoginPageBtn>
                    <CustomLoginPageBtn $findNoneSelBtn>비밀번호 찾기</CustomLoginPageBtn>
                </CustomLoginPageDiv>

                <CustomLoginPageP $findIdResultP>회원님의 아이디는 으로 등록되어 있습니다.</CustomLoginPageP>

                <CustomLoginPageBtn $loginbtn $mbspbtn>로그인 하기</CustomLoginPageBtn>
            </CustomLoginPageDiv>
        </div>
    );
}

export default FindIdResult;