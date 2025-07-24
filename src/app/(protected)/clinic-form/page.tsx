import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./_components/form";

const ClinicFormPage = () => {
  return (
    <div>
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Clínica</DialogTitle>
            <DialogDescription>
              Adicione o nome da clínica para continuar.
            </DialogDescription>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;
