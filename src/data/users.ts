// Data dummy users untuk sistem absensi
import { User } from '@/lib/types';

export const dummyUsers: User[] = [
  // Admin users
  {
    id: '1',
    username: 'admin',
    password: 'admin123', // Di production: harus di-hash
    role: 'admin',
    name: 'Administrator Sekolah',
    email: 'admin@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '2',
    username: 'admin2',
    password: 'admin456',
    role: 'admin',
    name: 'Admin TU',
    email: 'admin.tu@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },

  // Teacher users
  {
    id: '3',
    username: 'guru1',
    password: 'guru123',
    role: 'teacher',
    name: 'Dra. Siti Aminah, M.Pd',
    email: 'siti.aminah@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '4',
    username: 'guru2',
    password: 'guru123',
    role: 'teacher',
    name: 'Ahmad Fauzi, S.Si',
    email: 'ahmad.fauzi@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '5',
    username: 'guru3',
    password: 'guru123',
    role: 'teacher',
    name: 'Dr. Maria Susanti',
    email: 'maria.susanti@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '6',
    username: 'guru4',
    password: 'guru123',
    role: 'teacher',
    name: 'Bambang Wijaya, M.Pd',
    email: 'bambang.wijaya@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '7',
    username: 'guru5',
    password: 'guru123',
    role: 'teacher',
    name: 'Rina Kartika, S.Pd',
    email: 'rina.kartika@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },

  // Principal users
  {
    id: '8',
    username: 'kepsek',
    password: 'kepsek123',
    role: 'principal',
    name: 'Prof. Dr. Hendro Sunarso, M.Ed',
    email: 'kepala.sekolah@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
  {
    id: '9',
    username: 'wakil_kepsek',
    password: 'wakil123',
    role: 'principal',
    name: 'Drs. Sugiarto, M.M',
    email: 'wakil.kepsek@sekolah.edu',
    createdAt: '2024-01-01T00:00:00Z',
    isActive: true,
  },
];

// Function untuk mencari user berdasarkan username dan password
export function findUserByCredentials(username: string, password: string): User | null {
  return dummyUsers.find(
    (user) => user.username === username && user.password === password && user.isActive
  ) || null;
}

// Function untuk mencari user berdasarkan ID
export function findUserById(id: string): User | null {
  return dummyUsers.find((user) => user.id === id && user.isActive) || null;
}

// Function untuk mendapatkan users berdasarkan role
export function getUsersByRole(role: 'admin' | 'teacher' | 'principal'): User[] {
  return dummyUsers.filter((user) => user.role === role && user.isActive);
}

// Function untuk mendapatkan semua teachers
export function getAllTeachers(): User[] {
  return getUsersByRole('teacher');
}

// Function untuk mendapatkan total users per role
export function getUserStats() {
  return {
    totalAdmin: getUsersByRole('admin').length,
    totalTeachers: getUsersByRole('teacher').length,
    totalPrincipal: getUsersByRole('principal').length,
    totalUsers: dummyUsers.filter(user => user.isActive).length,
  };
}