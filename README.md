# 🛠️ Setup pnpm (Local Development)

## 1. Install pnpm

```bash
npm install -g pnpm
```

Verify installation:

```bash
pnpm -v
```

---

## 2. Install Dependencies

From the project root:

```bash
pnpm install
```

---

## 3. Run the Project

### Start all apps

```bash
pnpm dev
```

## 📌 Notes

* Use `pnpm-workspace.yaml` to manage packages
* Avoid installing dependencies inside subfolders manually
* Prefer `workspace:*` for internal packages
