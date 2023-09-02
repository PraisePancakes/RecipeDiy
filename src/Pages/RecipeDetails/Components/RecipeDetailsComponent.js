import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loading from "../../../GL_Components/Loading";
import "../Css/RecipeDetails.css";
import PostHeaderComponent from "./PostHeaderComponent";
import IngredientsComponent from "./IngredientsComponent";
import StepsComponent from "./StepsComponent";
import PostPictureComponent from "./PostPictureComponent";
import { BsArrowReturnLeft, BsBookmarkPlus, BsFlag } from "react-icons/bs";
import { PiSmileySadFill } from "react-icons/pi";
import DeletePostComponent from "./DeletePostComponent";
import CommentsComponent from "./CommentsComponent";
import LikesComponent from "./LikesComponent";
import { CiMenuKebab, CiBookmarkRemove } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const RecipeComponent = ({ user }) => {
  const [userInfo, setUserInfo] = useState(null);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postCount, setPostCount] = useState(0);
  const [authError, setAuthError] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const printRef = useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");

    setIsModalOpen(false);
  };

  useEffect(() => {
    const getRecipe = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://recipediy.onrender.com/getUserPost/recipe/${postId}`
        );
        setPost(response.data.post);
        setUserInfo(response.data.user);
        setPostCount(response.data.postCount);
      } catch (error) {
        setAuthError(error.response.status + " " + error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipe();
  }, [postId]);

  const savePost = async (postId) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `https://recipediy.onrender.com/savePost/${postId}`
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        setError("");
        setSuccessMessage("");
        setIsLoading(false);
        window.location.reload();
      }, 2000);

      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {" "}
      <section className="">
        {isLoading ? (
          <Loading />
        ) : authError ? (
          <div className="text-5xl flex flex-col items-center justify-center mx-10 h-[50rem]">
            <h1 className=" text-red-900">{authError.toUpperCase()}</h1>
            <div className="flex justify-center items-center">
              <PiSmileySadFill color="orange" size={100} />

              <Link
                to="/home"
                className=" underline flex hover:text-black transition-colors duration-300 justify-center items-center gap-2 text-base px-2 rounded-md text-slate-600"
              >
                return back to home
                <BsArrowReturnLeft />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h1
              className={`${
                error
                  ? "border my-2 mx-5 border-red-700 opacity-100 rounded-md p-2 text-white text-xl bg-red-500"
                  : "w-0 opacity-0"
              } transition-width duration-500`}
            >
              {error}
            </h1>

            <div
              className={`${
                successMessage
                  ? "border  my-2 mx-5 border-green-700 opacity-100 rounded-md p-2 text-white text-xl bg-green-500"
                  : "w-0 opacity-0"
              } transition-width duration-500`}
            >
              {successMessage}
            </div>

            <div className="w-full flex gap-5 justify-end items-center pr-10 mb-2">
              <LikesComponent user={user} postId={postId} />
              <button onClick={() => setIsModalOpen(!isModalOpen)}>
                {" "}
                <CiMenuKebab />
              </button>
            </div>
            {isModalOpen ? (
              <div className=" absolute right-0 h-[11rem] w-[10rem] rounded-md mt-1 mr-1  border border-slate-600 bg-slate-100">
                {" "}
                <ul className="flex flex-col items-center justify-start  py-2">
                  {" "}
                  {user.savedPosts.includes(post._id) ? (
                    <button
                      onClick={() => savePost(post._id)}
                      className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                    >
                      {" "}
                      <CiBookmarkRemove size={20} />
                      <h1>Unsave post</h1>
                    </button>
                  ) : (
                    <button
                      onClick={() => savePost(post._id)}
                      className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                    >
                      {" "}
                      <BsBookmarkPlus />
                      <h1>Save post</h1>
                    </button>
                  )}
                  <button
                    onClick={handleDownloadPdf}
                    className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                  >
                    {" "}
                    <GoDownload />
                    <h1>Download</h1>
                  </button>
                  <Link
                    to={`/report/${postId}`}
                    className="w-full flex items-center gap-2 px-2 h-10 hover:bg-slate-200"
                  >
                    {" "}
                    <BsFlag />
                    <h1>Report</h1>
                  </Link>
                  {post?.author === user?._id || user?.isAdmin ? (
                    <button className="w-full flex items-center gap-2 h-10 px-2 hover:bg-slate-200">
                      {" "}
                      <DeletePostComponent postId={postId} />{" "}
                    </button>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            ) : (
              ""
            )}

            <PostHeaderComponent
              userInfo={userInfo}
              post={post}
              postCount={postCount}
              user={user}
            />
            <div className="flex flex-col gap-5 items-center justify-center">
              <PostPictureComponent post={post} />
              <div ref={printRef} className="w-full">
                <IngredientsComponent post={post} />
                <StepsComponent post={post} />
              </div>

              <CommentsComponent user={user} postId={postId} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default RecipeComponent;
