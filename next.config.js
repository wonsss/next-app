// https://github.com/vercel/next.js/blob/v14.1.0/packages/next/src/server/config-shared.ts 에서 사용 가능 옵션 참고
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // 리액트 엄겸 모드 활성화
	poweredByHeader: false, // 보안 취약점인 X-Powered-By 헤더를 비활성화
	eslint: {
		ignoreDuringBuilds: true, // 빌드 시 eslint 검사를 하지 않도록 설정한다. 이후에 CI 과정에서 ESLint 검사를 진행할 예정이므로 빌드 시간 단축을 위함이다.
	},
};

module.exports = nextConfig;
