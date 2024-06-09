import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
};

export const Modal = ({ isModalOpen, handleCloseModal }: Props) => {
  return (
    <div className={`${isModalOpen ? "block" : "hidden"} ${styles.modal}`}>
      <div
        className={`${styles.modal_content} rounded bg-slate-50 border-solid border border-slate-300`}
      >
        <span className={styles.close} onClick={handleCloseModal}>
          &times;
        </span>
        <main className="text-black flex flex-col items-center gap-7">
          <Image
            src="/box.jpeg"
            alt="Image of a box"
            width={200}
            height={200}
            className="rounded w-14 h-14"
          />
          <div className="flex flex-col">
            <div className="flex gap-3 items-center justify-center">
              <h1 className="font-bold text-3xl">INTES</h1>{" "}
              <span className="text-gray-600 rounded bg-slate-200 p-1 text-xs">
                Layout
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Descriptive name of the Layout
            </p>
          </div>
          <p className="px-5 text-center">
            Those options are already baked in with this model shoot me an email
            clear blue water but we need distributors to evangelize the new line
            to local markets.
          </p>
          {/* FLAGS */}
          <div className="flex gap-2 text-gray-600 text-sm">
            <span className="bg-slate-200 p-1 rounded border-solid border border-slate-300">
              #comms
            </span>
            <span className="bg-slate-200 p-1 rounded border-solid border border-slate-300">
              #coverage
            </span>
            <span className="bg-slate-200 p-1 rounded border-solid border border-slate-300">
              #stakeholders
            </span>
          </div>

          {/* INFOS */}
          {/* TODO: I would like to create a component for all these items and make this component more readable :D */}
          <div className="flex">
            <div className="flex flex-col px-10 py-2">
              <span className="font-bold text-center">2485</span>
              <span className="text-gray-600 text-sm text-center">Used</span>
            </div>
            <div className="flex flex-col px-10 py-2 border-solid border-l border-slate-300">
              <span className="font-bold text-center">Universal</span>
              <span className="text-gray-600 text-sm text-center">Type</span>
            </div>
            <div className="flex flex-col px-10 py-2 border-solid border-l border-slate-300">
              <span className="font-bold text-center">6</span>
              <span className="text-gray-600 text-sm text-center">
                Pages No.
              </span>
            </div>
            <div className="flex flex-col px-10 py-2 border-solid border-l border-slate-300">
              <span className="font-bold text-center">07/23/2024</span>
              <span className="text-gray-600 text-sm text-center">
                Last Updated
              </span>
            </div>
          </div>

          {/* BOX IMAGE */}
          <div className="bg-slate-200 rounded min-w-full h-60"></div>

          {/* QUESTIONS */}
          <div>
            <h2 className="font-bold text-black text-2xl mb-4">
              Business Questions
            </h2>
            {/* TODO: I would like to create a component for all questions and make this component more readable :D */}
            <div className="flex flex-wrap justify-between w-4/4 gap-1">
              <div className="bg-slate-200 rounded p-2 flex flex-col gap-2 flex-1 min-w-64">
                <span className="font-bold text-black">Question 1</span>
                <p className="text-gray-600 text-sm">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="rounded p-2 flex flex-col gap-2 flex-1 min-w-64">
                <span className="font-bold text-black">Question 2</span>
                <p className="text-gray-600 text-sm">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="rounded p-2 flex flex-col gap-2 flex-1 min-w-64">
                <span className="font-bold text-black">Question 3</span>
                <p className="text-gray-600 text-sm">
                  Short description of the item goes nicely here.
                </p>
              </div>
              <div className="rounded p-2 flex flex-col gap-2 flex-1 min-w-64">
                <span className="font-bold text-black">Question 4</span>
                <p className="text-gray-600 text-sm">
                  Short description of the item goes nicely here.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-slate-900 rounded p-2 text-slate-50 w-full flex gap-2 items-center justify-center">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                  stroke="#ffffff"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Favorite Item
          </button>
        </main>
      </div>
    </div>
  );
};
