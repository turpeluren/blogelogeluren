import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import type { AstroComponentFactory, AstroComponentInstance } from "astro/runtime/server/index.js";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { author, title, pubDatetime, description, microblog, image } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  if (microblog || image) {
	return (
		<div className={"microblog date"}>
				<a href="https://mas.to/@turpelurpeluren"><span className={"microblog author"}>@{author}</span></a>
				<Datetime className="px-2" datetime={pubDatetime} />
				<hr></hr>
		</div>
	)
  }

  return (
    <li className="my-5">
      <span>
      
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
		
		{!microblog && (
			<h2 {...headerProps}>{title}</h2>
		)}
		
    </a>

	{pubDatetime != null && !microblog && (
		<Datetime className="px-2" datetime={pubDatetime} />
	)}

		{microblog && (
			<div className={"microblog date"}>
				<Datetime datetime={pubDatetime} />
			</div>
		)}
	
    </span>
    </li>
  );
}
/*<p>{description}</p>*/