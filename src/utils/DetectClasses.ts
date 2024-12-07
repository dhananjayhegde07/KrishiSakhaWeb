class DiseaseAction {
    action: string = '';
    kannada_action: string = '';
};

class DiseaseModel {
    class_name: string = '';
    kannada_name: string = '';
    description: string = '';
    kannada_description: string = '';
    cause: string = '';
    kannada_cause: string = '';
    recommended_actions: DiseaseAction[] = [];
};

class DetectRes {
    isHealthy: boolean = false;
    detected: boolean = false;
    confidence: number = 0;
    disease: DiseaseModel = new DiseaseModel();
};

export {DetectRes,DiseaseAction,DiseaseModel}