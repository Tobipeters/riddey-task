import * as React from "react";
import {
  ListContanerStyle,
  ListSytle,
  checkListStyle,
  textHolderStyle,
  titleStyle,
  detailStyle,
} from "./list.style.css";
import { IFeatureList, featureMenu } from "../../mock-data/feature-list";

export const FeatureList = () => {

  return (
    <ul className={ListContanerStyle}>
      {featureMenu.map(({ name, details }: IFeatureList, index: number) => (
        <li className={ListSytle} key={index}>
          <figure className={checkListStyle}>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.914 4.70583C10.8598 4.65115 10.7953 4.60776 10.7242 4.57814C10.6531 4.54853 10.5769 4.53328 10.4999 4.53328C10.4229 4.53328 10.3466 4.54853 10.2755 4.57814C10.2044 4.60776 10.1399 4.65115 10.0857 4.70583L5.73987 9.0575L3.91404 7.22583C3.85773 7.17144 3.79127 7.12867 3.71843 7.09997C3.6456 7.07127 3.56783 7.05719 3.48956 7.05855C3.41128 7.0599 3.33405 7.07666 3.26225 7.10786C3.19045 7.13907 3.12551 7.18411 3.07112 7.24041C3.01673 7.29672 2.97396 7.36318 2.94526 7.43601C2.91656 7.50885 2.90248 7.58662 2.90384 7.66489C2.90519 7.74316 2.92195 7.8204 2.95315 7.8922C2.98436 7.96399 3.0294 8.02894 3.0857 8.08333L5.3257 10.3233C5.37993 10.378 5.44445 10.4214 5.51553 10.451C5.58662 10.4806 5.66286 10.4959 5.73987 10.4959C5.81688 10.4959 5.89312 10.4806 5.96421 10.451C6.03529 10.4214 6.09981 10.378 6.15404 10.3233L10.914 5.56333C10.9732 5.5087 11.0205 5.44241 11.0528 5.36862C11.0851 5.29482 11.1018 5.21514 11.1018 5.13458C11.1018 5.05402 11.0851 4.97433 11.0528 4.90054C11.0205 4.82675 10.9732 4.76045 10.914 4.70583Z"
                fill="#E26559"
              />
            </svg>
          </figure>

          <section className={textHolderStyle}>
            <h5 className={titleStyle}>{name}</h5>
            <p className={detailStyle}> {details}</p>
          </section>
        </li>
      ))}
    </ul>
  );
};
