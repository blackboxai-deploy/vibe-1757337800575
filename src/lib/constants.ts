// Constants untuk aplikasi absensi siswa

export const APP_CONFIG = {
  name: 'SistemAbsensi',
  description: 'Sistem Absensi Siswa Multi Login',
  version: '1.0.0',
  sessionDuration: 24 * 60 * 60 * 1000, // 24 jam dalam milidetik
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher', 
  PRINCIPAL: 'principal',
} as const;

export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LATE: 'late',
  SICK: 'sick',
  PERMISSION: 'permission',
} as const;

export const ATTENDANCE_STATUS_LABELS = {
  [ATTENDANCE_STATUS.PRESENT]: 'Hadir',
  [ATTENDANCE_STATUS.ABSENT]: 'Tidak Hadir',
  [ATTENDANCE_STATUS.LATE]: 'Terlambat',
  [ATTENDANCE_STATUS.SICK]: 'Sakit',
  [ATTENDANCE_STATUS.PERMISSION]: 'Izin',
} as const;

export const ATTENDANCE_STATUS_COLORS = {
  [ATTENDANCE_STATUS.PRESENT]: 'bg-green-100 text-green-800',
  [ATTENDANCE_STATUS.ABSENT]: 'bg-red-100 text-red-800',
  [ATTENDANCE_STATUS.LATE]: 'bg-yellow-100 text-yellow-800',
  [ATTENDANCE_STATUS.SICK]: 'bg-blue-100 text-blue-800',
  [ATTENDANCE_STATUS.PERMISSION]: 'bg-purple-100 text-purple-800',
} as const;

export const GENDER_OPTIONS = [
  { value: 'L', label: 'Laki-laki' },
  { value: 'P', label: 'Perempuan' },
] as const;

export const GRADE_OPTIONS = [
  { value: 10, label: 'Kelas 10' },
  { value: 11, label: 'Kelas 11' },
  { value: 12, label: 'Kelas 12' },
] as const;

export const MAJOR_OPTIONS = [
  { value: 'IPA', label: 'IPA (Ilmu Pengetahuan Alam)' },
  { value: 'IPS', label: 'IPS (Ilmu Pengetahuan Sosial)' },
  { value: 'BAHASA', label: 'Bahasa' },
  { value: 'AGAMA', label: 'Agama' },
] as const;

export const NAVIGATION_MENUS = {
  admin: [
    {
      title: 'Dashboard',
      href: '/dashboard/admin',
      description: 'Overview statistik dan informasi umum',
    },
    {
      title: 'Manajemen Siswa',
      href: '/dashboard/admin/students',
      description: 'Kelola data siswa sekolah',
    },
    {
      title: 'Manajemen Guru',
      href: '/dashboard/admin/teachers',
      description: 'Kelola data guru dan staff',
    },
    {
      title: 'Manajemen Kelas',
      href: '/dashboard/admin/classes',
      description: 'Kelola kelas dan mata pelajaran',
    },
    {
      title: 'Laporan',
      href: '/dashboard/admin/reports',
      description: 'Laporan absensi dan analitik',
    },
  ],
  teacher: [
    {
      title: 'Dashboard',
      href: '/dashboard/teacher',
      description: 'Overview kelas yang diampu',
    },
    {
      title: 'Input Absensi',
      href: '/dashboard/teacher/attendance',
      description: 'Input absensi siswa',
    },
    {
      title: 'Laporan Kelas',
      href: '/dashboard/teacher/reports',
      description: 'Laporan absensi kelas yang diampu',
    },
  ],
  principal: [
    {
      title: 'Dashboard',
      href: '/dashboard/principal',
      description: 'Overview sekolah dan statistik',
    },
    {
      title: 'Analitik',
      href: '/dashboard/principal/analytics',
      description: 'Analitik mendalam dan trend absensi',
    },
  ],
} as const;

export const DASHBOARD_COLORS = {
  primary: 'bg-blue-600',
  secondary: 'bg-gray-600', 
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  danger: 'bg-red-600',
  info: 'bg-cyan-600',
} as const;

export const CHART_COLORS = {
  present: '#22c55e', // green-500
  absent: '#ef4444',  // red-500
  late: '#eab308',    // yellow-500
  sick: '#3b82f6',    // blue-500
  permission: '#8b5cf6', // violet-500
} as const;

export const PAGINATION_LIMITS = [10, 25, 50, 100] as const;

export const DATE_FORMATS = {
  display: 'dd/MM/yyyy',
  api: 'yyyy-MM-dd',
  timestamp: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const;

export const LOCAL_STORAGE_KEYS = {
  AUTH_SESSION: 'absensi_auth_session',
  USER_PREFERENCES: 'absensi_user_preferences',
  THEME: 'absensi_theme',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    CHECK: '/api/auth/check',
  },
  STUDENTS: '/api/students',
  TEACHERS: '/api/teachers',
  CLASSES: '/api/classes',
  SUBJECTS: '/api/subjects',
  ATTENDANCE: '/api/attendance',
  DASHBOARD: {
    ADMIN: '/api/dashboard/admin',
    TEACHER: '/api/dashboard/teacher',
    PRINCIPAL: '/api/dashboard/principal',
  },
  REPORTS: '/api/reports',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;