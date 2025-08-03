import React from "react";
import "../assets/style/experience.css";
import { Timeline } from "antd";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const experienceData = [
    {
      titleKey: "experience_title_3",
      details: ["experience_detail_3"],
    },
    {
      titleKey: "experience_title_1",
      details: [
        "experience_detail_1_1",
        "experience_detail_1_2",
        "experience_detail_1_3",
        "experience_detail_1_4",
        "experience_detail_1_5",
        "experience_detail_1_6",
        "experience_detail_1_7",
        "experience_detail_1_8",
        "experience_detail_1_9",
        "experience_detail_1_10",
      ],
    },
    {
      titleKey: "experience_title_2",
      details: [
        "experience_detail_2_1",
        "experience_detail_2_2",
        "experience_detail_2_3",
        "experience_detail_2_4",
        "experience_detail_2_5",
        "experience_detail_2_6",
        "experience_detail_2_7",
        "experience_detail_2_8",
        "experience_detail_2_9",
        "experience_detail_2_10",
        "experience_detail_2_11",
        "experience_detail_2_12",
        "experience_detail_2_13",
        "experience_detail_2_14",
        "experience_detail_2_15",
        "experience_detail_2_16",
        "experience_detail_2_17",
        "experience_detail_2_18",
        "experience_detail_2_19",
        "experience_detail_2_20",
        "experience_detail_2_21",
        "experience_detail_2_22",
      ],
    },
  ];

  const renderTimelineItem = (experience) => ({
    children: (
      <>
        <div className="label-position">{t(experience.titleKey)}</div>
        {experience.details.map((detailKey, index) => (
          <div key={index} className="label-experience-detail">
            {t(detailKey)}
          </div>
        ))}
      </>
    ),
  });

  return (
    <div className="container">
      <div id="Experience" className="content-wrapper">
        <div className="div-main-experience">
          <div className="div-label">
            <h2 className="label-experience">{t("experience_page")}</h2>
          </div>
          <Timeline items={experienceData.map(renderTimelineItem)} />
        </div>
      </div>
    </div>
  );
}

export default Experience;
