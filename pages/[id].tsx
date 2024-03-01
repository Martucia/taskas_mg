import { protectedPage } from "@/features/auth/ui/protected-page";
import { KanbanPage } from "@/pages/[id]";

export default protectedPage(KanbanPage);
