import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthStore from "../stores/userState";
import useModalStore from "../stores/modalState";

const LoginModal = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);

  const setLoginModalClose = useModalStore((state) => state.setLoginModalClose);
  const setSignupModalOpen = useModalStore((state) => state.setSignupModalOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSignupHovered, setIsSignupHovered] = useState(false);

  // handleSubmit의 인자가 되는 Submit 함수
  const submitForm = (data) => {
    console.log(data);
    //서버로 로그인 요청
    // 전역 상태로 관리되는 isLoggedIn을 true로 변경해줌 + 유저 정보를 담음(추가 필요)
    setLoggedIn(data);
    reset();
    setLoginModalClose();
  };

  // 소셜로그인 핸들링 함수
  const handleKakaoLogin = () => {
    console.log("카카오로그인 시도");
  };
  const handleNaverLogin = () => {
    console.log("네이버로그인 시도");
  };

  const handleGoogleLogin = () => {
    console.log("구글로그인 시도");
  };

  // 회원가입으로 가는 함수
  const handleSignup = () => {
    // 로그인 모달이 닫히고 회원가입 모달이 열리는 동작 필요함
    console.log("회원가입으로 갑니다");
    setLoginModalClose();
    setSignupModalOpen();
  };

  return (
    <div
      id="outer-layer"
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target.id == "outer-layer") {
          setLoginModalClose();
        }
      }}
    >
      <div
        id="inner"
        className="mx-auto container bg-white w-[500px] min-h-[620px] flex flex-col items-center rounded-3xl shadow-md"
      >
        <h1 className="text-4xl font-bold text-gray-700 mt-12 mb-16">
          로그인해쥬
        </h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col w-3/5"
        >
          <div className="h-[80px]">
            {/* 이메일 => 형식: (대소문자 구분 없이 알파벳 + 숫자) + @ + (대소문자 구분 없이 알파벳 + 숫자) + . + (알파벳) */}
            <input
              type="text"
              id="email"
              className="rounded-full bg-stone-100 w-full p-3 border border-white mb-1"
              placeholder="이메일을 입력하세요"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]+$/i,
                  message: "올바른 형식의 이메일을 입력하세요",
                },
              })}
            />
            {errors.email ? (
              <p className="px-3 text-red-500 text-sm">
                {errors.email.message}
              </p>
            ) : (
              <p className="invisible text-sm">nothing</p>
            )}
          </div>
          <div className="h-[80px]">
            <input
              type="password"
              className="rounded-full bg-stone-100 w-full p-3 border border-white mb-1"
              id="pw"
              placeholder="비밀번호를 입력하세요"
              {...register("pw", {
                required: true,
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상 15자 미만 입니다",
                },
                maxLength: {
                  value: 15,
                  message: "비밀번호는 15자 미만 입니다",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                  message: "영문, 숫자, 특수문자를 1가지 이상 포함",
                },
              })}
            />
            {errors.pw ? (
              <p className="px-3 text-red-500 text-sm">{errors.pw.message}</p>
            ) : (
              <p className="invisible text-sm">nothing</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-full bg-amber-300 hover:bg-amber-400 p-3"
          >
            로그인
          </button>
        </form>
        <div id="social-login" className="w-full my-10">
          <div className="hr-sect w-1/2 mx-auto">
            <div className="flex items-center text-gray-400 my-2">
              <span className="flex-grow bg-gray-400 h-px m-1"></span>
              <span className="text-xs">소셜 로그인</span>
              <span className="flex-grow bg-gray-400 h-px m-1"></span>
            </div>
          </div>
          <div
            id="social-icons"
            className="flex justify-around w-1/2 mx-auto my-3"
          >
            <div id="kakao" onClick={handleKakaoLogin}>
              <img
                src="/assets/images/social-login/kakao.png"
                alt=""
                className="w-10 h-10 rounded-full hover:outline hover:outline-2 outline-gray-300"
              />
            </div>
            <div id="naver" onClick={handleNaverLogin}>
              <img
                src="/assets/images/social-login/naver.png"
                alt=""
                className="w-10 h-10 rounded-full hover:outline hover:outline-2 outline-gray-300"
              />
            </div>
            <div id="google" onClick={handleGoogleLogin}>
              <img
                src="/assets/images/social-login/google.png"
                alt=""
                className="w-10 h-10 rounded-full hover:outline hover:outline-2 outline-gray-300"
              />
            </div>
          </div>
        </div>
        <p
          className={`box-content w-1/2 text-center transition ${
            isSignupHovered ? "text-amber-500" : ""
          }`}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsSignupHovered(true)}
          onMouseLeave={() => setIsSignupHovered(false)}
          onClick={handleSignup}
        >
          {isSignupHovered ? "회원가입하러 가기" : "아직 회원이 아니신가요?"}
        </p>
      </div>
    </div>
  );
};
export default LoginModal;