"use client";
import { useCallback, useEffect, useState } from "react";
import { AssetCard } from "./components/asset-card";
import { Input } from "./components/general/inputs/general-input";
import Image from "next/image";
import { Modal } from "./components/modal";

export type Asset = {
  id: number;
  name: string;
  description: string;
  date?: string;
};

type Data = {
  assets: Asset[];
};

type Tab = {
  name: string;
  status: string;
};

async function getData() {
  const res = await fetch(`${window.location.href}/api/assets`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TAB_STATUS_ACTIVE = "active";
const TAB_STATUS_DISABLED = "disabled";

const tabsInitialState: Tab[] = [
  { name: "Featured", status: TAB_STATUS_ACTIVE },
  { name: "KPI", status: TAB_STATUS_DISABLED },
  { name: "Layouts", status: TAB_STATUS_DISABLED },
  { name: "Storyboards", status: TAB_STATUS_DISABLED },
];

export default function Home() {
  const [tabs, setTabs] = useState(tabsInitialState);
  const [data, setData] = useState<Data>();
  const [activeTab, setActiveTab] = useState("Featured");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (event: any) => {
    const value = event.currentTarget.getAttribute("data-name");
    setActiveTab(value);
    //reset all other tabs and just set the clicked one
    const mappedTabs = tabs.map((tab) => {
      if (tab.name === value) {
        tab.status = TAB_STATUS_ACTIVE;
      } else {
        tab.status = TAB_STATUS_DISABLED;
      }
      return tab;
    });
    setTabs(mappedTabs);
  };

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const d = await getData();
      setData(d);
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10 bg-slate-200 gap-10">
      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      <button className="bg-gray-500 rounded p-3 fixed right-4 top-4 flex gap-2 w-32 justify-center items-center">
        <Image
          src="/box-add.svg"
          alt="Box with a plus icon"
          height={20}
          width={20}
        />
        Request
      </button>
      <h1 className="text-slate-950 font-bold text-4xl">Library</h1>
      <p className="text-slate-950">
        Browse for assets to report and present analysis.
      </p>

      <Input type="text" placeholder="Type to search" className="w-3/4" />

      <div className="bg-gray-300 flex gap-2 p-1 rounded w-3/4">
        {tabs.map((item: Tab) => (
          <button
            key={item.name}
            className={`${
              item.status === TAB_STATUS_ACTIVE
                ? "bg-slate-50 text-black"
                : "text-gray-600"
            } w-full rounded p-1 font-bold`}
            data-name={item.name}
            onClick={handleTabClick}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col text w-3/4">
        {activeTab === "Featured" && (
          /* TODO: I would like to create a component for all tabs and make this page more readable :D */
          <>
            <h2 className="mt-5 mb-2 text-slate-950 font-bold text-2xl">
              Featured
            </h2>
            <p className="mb-10 text-gray-600">
              Curated top picks from this week
            </p>
            <div className="flex flex-wrap justify-between w-4/4 gap-5 px-2">
              {data?.assets &&
                data.assets.map((item: Asset) => (
                  <AssetCard
                    handleOpenModal={handleOpenModal}
                    key={item.id}
                    asset={item}
                    variant="white"
                  />
                ))}
            </div>
          </>
        )}

        {activeTab === "KPI" && (
          <>
            <h2 className="mt-5 mb-2 text-slate-950 font-bold text-2xl">KPI</h2>
            <p className="mb-10 text-gray-600">
              Curated top picks from this week
            </p>
            <div className="flex flex-wrap justify-between w-4/4 gap-5 px-2">
              {data?.assets &&
                data.assets.map((item: Asset) => (
                  <AssetCard
                    handleOpenModal={handleOpenModal}
                    key={item.id}
                    asset={item}
                    variant="white"
                  />
                ))}
            </div>
          </>
        )}

        {activeTab === "Layouts" && (
          <>
            <h2 className="mt-5 mb-2 text-slate-950 font-bold text-2xl">
              Layouts
            </h2>
            <p className="mb-10 text-gray-600">
              Curated top picks from this week
            </p>
            <div className="flex flex-wrap justify-between w-4/4 gap-5 px-2">
              {data?.assets &&
                data.assets.map((item: Asset) => (
                  <AssetCard
                    handleOpenModal={handleOpenModal}
                    key={item.id}
                    asset={item}
                    variant="white"
                  />
                ))}
            </div>
          </>
        )}

        {activeTab === "Storyboards" && (
          <>
            <h2 className="mt-5 mb-2 text-slate-950 font-bold text-2xl">
              Storyboards
            </h2>
            <p className="mb-10 text-gray-600">
              Curated top picks from this week
            </p>
            <div className="flex flex-wrap justify-between w-4/4 gap-5 px-2">
              {data?.assets &&
                data.assets.map((item: Asset) => (
                  <AssetCard
                    handleOpenModal={handleOpenModal}
                    key={item.id}
                    asset={item}
                    variant="white"
                  />
                ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col text w-3/4">
        <h2 className="mt-5 mb-2 text-slate-950 font-bold text-2xl">
          Trending
        </h2>
        <p className="mb-10 text-gray-600">Most popular by community</p>
        <div className="flex flex-wrap justify-between w-4/4 gap-5">
          {data?.assets &&
            data.assets.map((item: Asset) => (
              <AssetCard
                handleOpenModal={handleOpenModal}
                key={item.id}
                asset={item}
                variant="none"
              />
            ))}
        </div>
      </div>
    </main>
  );
}
