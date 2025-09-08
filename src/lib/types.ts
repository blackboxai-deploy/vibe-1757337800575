// TypeScript interfaces untuk aplikasi absensi

export type UserRole = 'admin' | 'teacher' | 'principal';

export interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  name: string;
  email: string;
  createdAt: string;
  isActive: boolean;
}

export interface Student {
  id: string;
  nis: string; // Nomor Induk Siswa
  name: string;
  className: string;
  gender: 'L' | 'P'; // Laki-laki atau Perempuan
  address: string;
  phone: string;
  parentPhone: string;
  dateOfBirth: string;
  createdAt: string;
  isActive: boolean;
}

export interface Class {
  id: string;
  name: string;
  grade: number; // Kelas (10, 11, 12)
  major: string; // Jurusan (IPA, IPS, etc.)
  teacherId: string; // Wali kelas
  studentCount: number;
  createdAt: string;
  isActive: boolean;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  teacherId: string;
  classIds: string[];
  createdAt: string;
  isActive: boolean;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  studentNis: string;
  date: string;
  status: AttendanceStatus;
  teacherId: string;
  teacherName: string;
  className: string;
  subject: string;
  notes?: string;
  createdAt: string;
}

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'sick' | 'permission';

export interface AttendanceStats {
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  sick: number;
  permission: number;
  presentageRate: number;
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  todayAttendance: AttendanceStats;
  weeklyAttendance: AttendanceStats;
  monthlyAttendance: AttendanceStats;
}

// Form interfaces
export interface LoginFormData {
  username: string;
  password: string;
  role: UserRole;
}

export interface StudentFormData {
  nis: string;
  name: string;
  className: string;
  gender: 'L' | 'P';
  address: string;
  phone: string;
  parentPhone: string;
  dateOfBirth: string;
}

export interface AttendanceFormData {
  date: string;
  className: string;
  subject: string;
  attendanceRecords: {
    studentId: string;
    status: AttendanceStatus;
    notes?: string;
  }[];
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Session and Auth types
export interface AuthSession {
  user: Omit<User, 'password'>;
  isAuthenticated: boolean;
  expires: string;
}

export interface AuthContextType {
  session: AuthSession | null;
  login: (credentials: LoginFormData) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

// Chart and Analytics types
export interface AttendanceChartData {
  date: string;
  present: number;
  absent: number;
  late: number;
  sick: number;
  permission: number;
}

export interface ClassAttendanceData {
  className: string;
  totalStudents: number;
  presentCount: number;
  absentCount: number;
  attendanceRate: number;
}

export interface TeacherPerformanceData {
  teacherId: string;
  teacherName: string;
  classesManaged: number;
  averageAttendanceRate: number;
  totalStudents: number;
}