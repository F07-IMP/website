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
