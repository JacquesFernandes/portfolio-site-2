import {FC} from "react";

export interface MetaProps {
	title: string;
	description?: string;
	keywords?: string[];
}

export const Meta: FC<MetaProps> = (props) => {
  return(
		<>
			<meta name="title" content={`${props.title} - Jacques Fernandes`} />
			<meta name="description" content={props.description} />
			<meta name="keywords" content={props.keywords!.join(', ')} />
			<meta name="robots" content="index, follow" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="English" />
			<meta name="author" content="Jacques Fernandes" />
		</>
	);
}

Meta.defaultProps = {
	description: 'Bring me thine ideas and passion and I shall turn them into code',
	keywords: ['home', 'full stack developer', 'full stack', 'developer', 'web', 'android', 'ios', 'flutter']
}