import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import type { AstroComponentFactory, AstroComponentInstance } from "astro/runtime/server/index.js";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"posts">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { author, title, pubDatetime, description, microblog, image } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "decoration-solid decoration-1 hover:underline underline-offset-2",
  };

  /*if (microblog || image) {
	return (
		<div className={"microblog date"}>
				<a href="https://mas.to/@turpelurpeluren"><span className={"microblog author"}>@{author}</span></a>
				<Datetime className="px-2" datetime={pubDatetime} />
				<hr></hr>
		</div>
	)
  }*/

  return (
    <div>
    <li className={`list-disc ml-4 mt-5 ${microblog || image ? "" : ""}`}>
      <div className="flex flex-row justify-between">
      
      <a
        href={href}
        className={`${microblog || image ? "text-skin-internal" : "text-skin-internal"} inline-block`}
      >
        <h2 className="font-normal" {...headerProps}>{title}&nbsp;</h2>
      </a>

      {pubDatetime != null && /*!microblog &&*/ (
        <Datetime className="" size="sm" datetime={pubDatetime} />
       )}
      </div>
      
    </li>
    </div>
  );
}
/*<p>{description}</p>
<hr className="mt-5 opacity-50"/>

{microblog && (
        <div className={"microblog date"}>
            <Datetime datetime={pubDatetime} />
        </div>
    )}*/