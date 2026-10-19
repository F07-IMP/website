type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
};

export function LockCloseIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-lock preview-icon" + (className ? " " + className : "")}
		>
			<rect
				width="18"
				height="11"
				x="3"
				y="11"
				rx="2"
				ry="2"
			/>
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	);
}

export function LockOpenIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-lock-open preview-icon" + (className ? " " + className : "")}
		>
			<rect
				width="18"
				height="11"
				x="3"
				y="11"
				rx="2"
				ry="2"
			/>
			<path d="M7 11V7a5 5 0 0 1 9.9-1" />
		</svg>
	);
}

export function ServerOfflineIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-server-off preview-icon" + (className ? " " + className : "")}
			{...props}
		>
			<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
			<path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
			<path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
			<path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
			<path d="M6 18h.01" />
			<path d="m2 2 20 20" />
		</svg>
	);
}

export function LoadingIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-loader-circle preview-icon" + (className ? " " + className : "")}
			{...props}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	);
}

export function RightArrowIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-arrow-right preview-icon" + (className ? " " + className : "")}
			{...props}
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}

export function BurgerMenuIcon({ className, size, strokeWidth, ...props }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size || 24}
			height={size || 24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth || 2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={"lucide lucide-menu preview-icon" + (className ? " " + className : "")}
			{...props}
		>
			<path d="M4 5h16" />
			<path d="M4 12h16" />
			<path d="M4 19h16" />
		</svg>
	);
}
