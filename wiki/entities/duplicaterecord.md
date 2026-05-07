---
logical: "duplicaterecord"
display: "Duplicate Record"
entitySetName: "duplicaterecords"
primaryId: "duplicateid"
tableType: "Standard"
ownership: "None"
---

# Duplicate Record

Potential duplicate record.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `duplicaterecord` |
| Display name | Duplicate Record |
| Display (plural) | Duplicate Records |
| Schema name | `DuplicateRecord` |
| Entity set (Web API) | `duplicaterecords` |
| Primary id attribute | `duplicateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/duplicaterecords?$select=&$top=10
GET /api/data/v9.2/duplicaterecords(<guid>)
POST /api/data/v9.2/duplicaterecords
PATCH /api/data/v9.2/duplicaterecords(<guid>)
DELETE /api/data/v9.2/duplicaterecords(<guid>)
```

## Attributes

Writable: **0** · Read-only: **11**

### Read-only

`AsyncOperationId`, `BaseRecordId`, `BaseRecordIdTypeCode`, `CreatedOn`, `DuplicateRecordId`, `DuplicateRecordIdTypeCode`, `DuplicateRuleId`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`

## Relationships

### Many-to-One (414)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_DuplicateBaseRecord` | [account](account.md) | `baserecordid` | `baserecordid_account` |
| `Account_DuplicateMatchingRecord` | [account](account.md) | `duplicaterecordid` | `duplicaterecordid_account` |
| `activityfileattachment_DuplicateBaseRecord` | [activityfileattachment](activityfileattachment.md) | `baserecordid` | `baserecordid_activityfileattachment` |
| `activityfileattachment_DuplicateMatchingRecord` | [activityfileattachment](activityfileattachment.md) | `duplicaterecordid` | `duplicaterecordid_activityfileattachment` |
| `adx_invitation_DuplicateBaseRecord` | [adx_invitation](adx_invitation.md) | `baserecordid` | `baserecordid_adx_invitation` |
| `adx_invitation_DuplicateMatchingRecord` | [adx_invitation](adx_invitation.md) | `duplicaterecordid` | `duplicaterecordid_adx_invitation` |
| `adx_inviteredemption_DuplicateBaseRecord` | [adx_inviteredemption](adx_inviteredemption.md) | `baserecordid` | `baserecordid_adx_inviteredemption` |
| `adx_inviteredemption_DuplicateMatchingRecord` | [adx_inviteredemption](adx_inviteredemption.md) | `duplicaterecordid` | `duplicaterecordid_adx_inviteredemption` |
| `aicopilot_DuplicateBaseRecord` | [aicopilot](aicopilot.md) | `baserecordid` | `baserecordid_aicopilot` |
| `aicopilot_DuplicateMatchingRecord` | [aicopilot](aicopilot.md) | `duplicaterecordid` | `duplicaterecordid_aicopilot` |
| `aipluginauth_DuplicateBaseRecord` | [aipluginauth](aipluginauth.md) | `baserecordid` | `baserecordid_aipluginauth` |
| `aipluginauth_DuplicateMatchingRecord` | [aipluginauth](aipluginauth.md) | `duplicaterecordid` | `duplicaterecordid_aipluginauth` |
| `aipluginoperationparameter_DuplicateBaseRecord` | [aipluginoperationparameter](aipluginoperationparameter.md) | `baserecordid` | `baserecordid_aipluginoperationparameter` |
| `aipluginoperationparameter_DuplicateMatchingRecord` | [aipluginoperationparameter](aipluginoperationparameter.md) | `duplicaterecordid` | `duplicaterecordid_aipluginoperationparameter` |
| `aipluginoperationresponsetemplate_DuplicateBaseRecord` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `baserecordid` | `baserecordid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_DuplicateMatchingRecord` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `duplicaterecordid` | `duplicaterecordid_aipluginoperationresponsetemplate` |
| `aiplugintitle_DuplicateBaseRecord` | [aiplugintitle](aiplugintitle.md) | `baserecordid` | `baserecordid_aiplugintitle` |
| `aiplugintitle_DuplicateMatchingRecord` | [aiplugintitle](aiplugintitle.md) | `duplicaterecordid` | `duplicaterecordid_aiplugintitle` |
| `aipluginusersetting_DuplicateBaseRecord` | [aipluginusersetting](aipluginusersetting.md) | `baserecordid` | `baserecordid_aipluginusersetting` |
| `aipluginusersetting_DuplicateMatchingRecord` | [aipluginusersetting](aipluginusersetting.md) | `duplicaterecordid` | `duplicaterecordid_aipluginusersetting` |
| `applicationuser_DuplicateBaseRecord` | [applicationuser](applicationuser.md) | `baserecordid` | `baserecordid_applicationuser` |
| `applicationuser_DuplicateMatchingRecord` | [applicationuser](applicationuser.md) | `duplicaterecordid` | `duplicaterecordid_applicationuser` |
| `Appointment_DuplicateBaseRecord` | [appointment](appointment.md) | `baserecordid` | `baserecordid_appointment` |
| `Appointment_DuplicateMatchingRecord` | [appointment](appointment.md) | `duplicaterecordid` | `duplicaterecordid_appointment` |
| `approvalprocess_DuplicateBaseRecord` | [approvalprocess](approvalprocess.md) | `baserecordid` | `baserecordid_approvalprocess` |
| `approvalprocess_DuplicateMatchingRecord` | [approvalprocess](approvalprocess.md) | `duplicaterecordid` | `duplicaterecordid_approvalprocess` |
| `approvalstageapproval_DuplicateBaseRecord` | [approvalstageapproval](approvalstageapproval.md) | `baserecordid` | `baserecordid_approvalstageapproval` |
| `approvalstageapproval_DuplicateMatchingRecord` | [approvalstageapproval](approvalstageapproval.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageapproval` |
| `approvalstagecondition_DuplicateBaseRecord` | [approvalstagecondition](approvalstagecondition.md) | `baserecordid` | `baserecordid_approvalstagecondition` |
| `approvalstagecondition_DuplicateMatchingRecord` | [approvalstagecondition](approvalstagecondition.md) | `duplicaterecordid` | `duplicaterecordid_approvalstagecondition` |
| `approvalstageintelligent_DuplicateBaseRecord` | [approvalstageintelligent](approvalstageintelligent.md) | `baserecordid` | `baserecordid_approvalstageintelligent` |
| `approvalstageintelligent_DuplicateMatchingRecord` | [approvalstageintelligent](approvalstageintelligent.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageintelligent` |
| `approvalstageorder_DuplicateBaseRecord` | [approvalstageorder](approvalstageorder.md) | `baserecordid` | `baserecordid_approvalstageorder` |
| `approvalstageorder_DuplicateMatchingRecord` | [approvalstageorder](approvalstageorder.md) | `duplicaterecordid` | `duplicaterecordid_approvalstageorder` |
| `AsyncOperation_DuplicateBaseRecord` | [asyncoperation](asyncoperation.md) | `asyncoperationid` | `asyncoperationid` |
| `businessprocess_DuplicateBaseRecord` | [businessprocess](businessprocess.md) | `baserecordid` | `baserecordid_businessprocess` |
| `businessprocess_DuplicateMatchingRecord` | [businessprocess](businessprocess.md) | `duplicaterecordid` | `duplicaterecordid_businessprocess` |
| `card_DuplicateBaseRecord` | [card](card.md) | `baserecordid` | `baserecordid_card` |
| `card_DuplicateMatchingRecord` | [card](card.md) | `duplicaterecordid` | `duplicaterecordid_card` |
| `catalogassignment_DuplicateBaseRecord` | [catalogassignment](catalogassignment.md) | `baserecordid` | `baserecordid_catalogassignment` |
| `catalogassignment_DuplicateMatchingRecord` | [catalogassignment](catalogassignment.md) | `duplicaterecordid` | `duplicaterecordid_catalogassignment` |
| `certificatecredential_DuplicateBaseRecord` | [certificatecredential](certificatecredential.md) | `baserecordid` | `baserecordid_certificatecredential` |
| `certificatecredential_DuplicateMatchingRecord` | [certificatecredential](certificatecredential.md) | `duplicaterecordid` | `duplicaterecordid_certificatecredential` |
| `connectioninstance_DuplicateBaseRecord` | [connectioninstance](connectioninstance.md) | `baserecordid` | `baserecordid_connectioninstance` |
| `connectioninstance_DuplicateMatchingRecord` | [connectioninstance](connectioninstance.md) | `duplicaterecordid` | `duplicaterecordid_connectioninstance` |
| `connector_DuplicateBaseRecord` | [connector](connector.md) | `baserecordid` | `baserecordid_connector` |
| `connector_DuplicateMatchingRecord` | [connector](connector.md) | `duplicaterecordid` | `duplicaterecordid_connector` |
| `Contact_DuplicateBaseRecord` | [contact](contact.md) | `baserecordid` | `baserecordid_contact` |
| `Contact_DuplicateMatchingRecord` | [contact](contact.md) | `duplicaterecordid` | `duplicaterecordid_contact` |
| `conversationtranscript_DuplicateBaseRecord` | [conversationtranscript](conversationtranscript.md) | `baserecordid` | `baserecordid_conversationtranscript` |
| `conversationtranscript_DuplicateMatchingRecord` | [conversationtranscript](conversationtranscript.md) | `duplicaterecordid` | `duplicaterecordid_conversationtranscript` |
| `credential_DuplicateBaseRecord` | [credential](credential.md) | `baserecordid` | `baserecordid_credential` |
| `credential_DuplicateMatchingRecord` | [credential](credential.md) | `duplicaterecordid` | `duplicaterecordid_credential` |
| `datalakefolder_DuplicateBaseRecord` | [datalakefolder](datalakefolder.md) | `baserecordid` | `baserecordid_datalakefolder` |
| `datalakefolder_DuplicateMatchingRecord` | [datalakefolder](datalakefolder.md) | `duplicaterecordid` | `duplicaterecordid_datalakefolder` |
| `datalakefolderpermission_DuplicateBaseRecord` | [datalakefolderpermission](datalakefolderpermission.md) | `baserecordid` | `baserecordid_datalakefolderpermission` |
| `datalakefolderpermission_DuplicateMatchingRecord` | [datalakefolderpermission](datalakefolderpermission.md) | `duplicaterecordid` | `duplicaterecordid_datalakefolderpermission` |
| `datalakeworkspace_DuplicateBaseRecord` | [datalakeworkspace](datalakeworkspace.md) | `baserecordid` | `baserecordid_datalakeworkspace` |
| `datalakeworkspace_DuplicateMatchingRecord` | [datalakeworkspace](datalakeworkspace.md) | `duplicaterecordid` | `duplicaterecordid_datalakeworkspace` |
| `datalakeworkspacepermission_DuplicateBaseRecord` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `baserecordid` | `baserecordid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_DuplicateMatchingRecord` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `duplicaterecordid` | `duplicaterecordid_datalakeworkspacepermission` |
| `dataprocessingconfiguration_DuplicateBaseRecord` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `baserecordid` | `baserecordid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_DuplicateMatchingRecord` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_dataprocessingconfiguration` |
| `desktopflowmodule_DuplicateBaseRecord` | [desktopflowmodule](desktopflowmodule.md) | `baserecordid` | `baserecordid_desktopflowmodule` |
| `desktopflowmodule_DuplicateMatchingRecord` | [desktopflowmodule](desktopflowmodule.md) | `duplicaterecordid` | `duplicaterecordid_desktopflowmodule` |
| `DuplicateRule_DuplicateBaseRecord` | [duplicaterule](duplicaterule.md) | `duplicateruleid` | `duplicateruleid` |
| `Email_DuplicateBaseRecord` | [email](email.md) | `baserecordid` | `baserecordid_email` |
| `Email_DuplicateMatchingRecord` | [email](email.md) | `duplicaterecordid` | `duplicaterecordid_email` |
| `emailserverprofile_duplicatebaserecord` | [emailserverprofile](emailserverprofile.md) | `baserecordid` | `baserecordid_emailserverprofile` |
| `emailserverprofile_duplicatematchingrecord` | [emailserverprofile](emailserverprofile.md) | `duplicaterecordid` | `duplicaterecordid_emailserverprofile` |
| `entityrecordfilter_DuplicateBaseRecord` | [entityrecordfilter](entityrecordfilter.md) | `baserecordid` | `baserecordid_entityrecordfilter` |
| `entityrecordfilter_DuplicateMatchingRecord` | [entityrecordfilter](entityrecordfilter.md) | `duplicaterecordid` | `duplicaterecordid_entityrecordfilter` |
| `environmentvariabledefinition_DuplicateBaseRecord` | [environmentvariabledefinition](environmentvariabledefinition.md) | `baserecordid` | `baserecordid_environmentvariabledefinition` |
| `environmentvariabledefinition_DuplicateMatchingRecord` | [environmentvariabledefinition](environmentvariabledefinition.md) | `duplicaterecordid` | `duplicaterecordid_environmentvariabledefinition` |
| `environmentvariablevalue_DuplicateBaseRecord` | [environmentvariablevalue](environmentvariablevalue.md) | `baserecordid` | `baserecordid_environmentvariablevalue` |
| `environmentvariablevalue_DuplicateMatchingRecord` | [environmentvariablevalue](environmentvariablevalue.md) | `duplicaterecordid` | `duplicaterecordid_environmentvariablevalue` |
| `exportedexcel_DuplicateBaseRecord` | [exportedexcel](exportedexcel.md) | `baserecordid` | `baserecordid_exportedexcel` |
| `exportedexcel_DuplicateMatchingRecord` | [exportedexcel](exportedexcel.md) | `duplicaterecordid` | `duplicaterecordid_exportedexcel` |
| `exportsolutionupload_DuplicateBaseRecord` | [exportsolutionupload](exportsolutionupload.md) | `baserecordid` | `baserecordid_exportsolutionupload` |
| `exportsolutionupload_DuplicateMatchingRecord` | [exportsolutionupload](exportsolutionupload.md) | `duplicaterecordid` | `duplicaterecordid_exportsolutionupload` |
| `Fax_DuplicateBaseRecord` | [fax](fax.md) | `baserecordid` | `baserecordid_fax` |
| `Fax_DuplicateMatchingRecord` | [fax](fax.md) | `duplicaterecordid` | `duplicaterecordid_fax` |
| `featurecontrolsetting_DuplicateBaseRecord` | [featurecontrolsetting](featurecontrolsetting.md) | `baserecordid` | `baserecordid_featurecontrolsetting` |
| `featurecontrolsetting_DuplicateMatchingRecord` | [featurecontrolsetting](featurecontrolsetting.md) | `duplicaterecordid` | `duplicaterecordid_featurecontrolsetting` |
| `feedback_DuplicateBaseRecord` | [feedback](feedback.md) | `baserecordid` | `baserecordid_feedback` |
| `feedback_DuplicateMatchingRecord` | [feedback](feedback.md) | `duplicaterecordid` | `duplicaterecordid_feedback` |
| `flowcredentialapplication_DuplicateBaseRecord` | [flowcredentialapplication](flowcredentialapplication.md) | `baserecordid` | `baserecordid_flowcredentialapplication` |
| `flowcredentialapplication_DuplicateMatchingRecord` | [flowcredentialapplication](flowcredentialapplication.md) | `duplicaterecordid` | `duplicaterecordid_flowcredentialapplication` |
| `flowevent_DuplicateBaseRecord` | [flowevent](flowevent.md) | `baserecordid` | `baserecordid_flowevent` |
| `flowevent_DuplicateMatchingRecord` | [flowevent](flowevent.md) | `duplicaterecordid` | `duplicaterecordid_flowevent` |
| `flowmachinegroup_DuplicateBaseRecord` | [flowmachinegroup](flowmachinegroup.md) | `baserecordid` | `baserecordid_flowmachinegroup` |
| `flowmachinegroup_DuplicateMatchingRecord` | [flowmachinegroup](flowmachinegroup.md) | `duplicaterecordid` | `duplicaterecordid_flowmachinegroup` |
| `flowmachineimage_DuplicateBaseRecord` | [flowmachineimage](flowmachineimage.md) | `baserecordid` | `baserecordid_flowmachineimage` |
| `flowmachineimage_DuplicateMatchingRecord` | [flowmachineimage](flowmachineimage.md) | `duplicaterecordid` | `duplicaterecordid_flowmachineimage` |
| `flowmachineimageversion_DuplicateBaseRecord` | [flowmachineimageversion](flowmachineimageversion.md) | `baserecordid` | `baserecordid_flowmachineimageversion` |
| `flowmachineimageversion_DuplicateMatchingRecord` | [flowmachineimageversion](flowmachineimageversion.md) | `duplicaterecordid` | `duplicaterecordid_flowmachineimageversion` |
| `flowmachinenetwork_DuplicateBaseRecord` | [flowmachinenetwork](flowmachinenetwork.md) | `baserecordid` | `baserecordid_flowmachinenetwork` |
| `flowmachinenetwork_DuplicateMatchingRecord` | [flowmachinenetwork](flowmachinenetwork.md) | `duplicaterecordid` | `duplicaterecordid_flowmachinenetwork` |
| `flowsessionbinary_DuplicateBaseRecord` | [flowsessionbinary](flowsessionbinary.md) | `baserecordid` | `baserecordid_flowsessionbinary` |
| `flowsessionbinary_DuplicateMatchingRecord` | [flowsessionbinary](flowsessionbinary.md) | `duplicaterecordid` | `duplicaterecordid_flowsessionbinary` |
| `fxexpression_DuplicateBaseRecord` | [fxexpression](fxexpression.md) | `baserecordid` | `baserecordid_fxexpression` |
| `fxexpression_DuplicateMatchingRecord` | [fxexpression](fxexpression.md) | `duplicaterecordid` | `duplicaterecordid_fxexpression` |
| `Goal_DuplicateBaseRecord` | [goal](goal.md) | `baserecordid` | `baserecordid_goal` |
| `Goal_DuplicateMatchingRecord` | [goal](goal.md) | `duplicaterecordid` | `duplicaterecordid_goal` |
| `GoalRollupQuery_DuplicateBaseRecord` | [goalrollupquery](goalrollupquery.md) | `baserecordid` | `baserecordid_goalrollupquery` |
| `GoalRollupQuery_DuplicateMatchingRecord` | [goalrollupquery](goalrollupquery.md) | `duplicaterecordid` | `duplicaterecordid_goalrollupquery` |
| `governanceconfiguration_DuplicateBaseRecord` | [governanceconfiguration](governanceconfiguration.md) | `baserecordid` | `baserecordid_governanceconfiguration` |
| `governanceconfiguration_DuplicateMatchingRecord` | [governanceconfiguration](governanceconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_governanceconfiguration` |
| `KbArticle_DuplicateBaseRecord` | [kbarticle](kbarticle.md) | `baserecordid` | `baserecordid_kbarticle` |
| `KbArticle_DuplicateMatchingRecord` | [kbarticle](kbarticle.md) | `duplicaterecordid` | `duplicaterecordid_kbarticle` |
| `keyvaultreference_DuplicateBaseRecord` | [keyvaultreference](keyvaultreference.md) | `baserecordid` | `baserecordid_keyvaultreference` |
| `keyvaultreference_DuplicateMatchingRecord` | [keyvaultreference](keyvaultreference.md) | `duplicaterecordid` | `duplicaterecordid_keyvaultreference` |
| `knowledgearticle_DuplicateBaseRecord` | [knowledgearticle](knowledgearticle.md) | `baserecordid` | `baserecordid_knowledgearticle` |
| `knowledgearticle_DuplicateMatchingRecord` | [knowledgearticle](knowledgearticle.md) | `duplicaterecordid` | `duplicaterecordid_knowledgearticle` |
| `KnowledgeBaseRecord_DuplicateBaseRecord` | [knowledgebaserecord](knowledgebaserecord.md) | `baserecordid` | `baserecordid_knowledgebaserecord` |
| `KnowledgeBaseRecord_DuplicateMatchingRecord` | [knowledgebaserecord](knowledgebaserecord.md) | `duplicaterecordid` | `duplicaterecordid_knowledgebaserecord` |
| `Letter_DuplicateBaseRecord` | [letter](letter.md) | `baserecordid` | `baserecordid_letter` |
| `Letter_DuplicateMatchingRecord` | [letter](letter.md) | `duplicaterecordid` | `duplicaterecordid_letter` |
| `managedidentity_DuplicateBaseRecord` | [managedidentity](managedidentity.md) | `baserecordid` | `baserecordid_managedidentity` |
| `managedidentity_DuplicateMatchingRecord` | [managedidentity](managedidentity.md) | `duplicaterecordid` | `duplicaterecordid_managedidentity` |
| `maskingrule_DuplicateBaseRecord` | [maskingrule](maskingrule.md) | `baserecordid` | `baserecordid_maskingrule` |
| `maskingrule_DuplicateMatchingRecord` | [maskingrule](maskingrule.md) | `duplicaterecordid` | `duplicaterecordid_maskingrule` |
| `msdyn_aibdataset_DuplicateBaseRecord` | [msdyn_aibdataset](msdyn_aibdataset.md) | `baserecordid` | `baserecordid_msdyn_aibdataset` |
| `msdyn_aibdataset_DuplicateMatchingRecord` | [msdyn_aibdataset](msdyn_aibdataset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdataset` |
| `msdyn_aibdatasetfile_DuplicateBaseRecord` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetfile_DuplicateMatchingRecord` | [msdyn_aibdatasetfile](msdyn_aibdatasetfile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetfile` |
| `msdyn_aibdatasetrecord_DuplicateBaseRecord` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetrecord_DuplicateMatchingRecord` | [msdyn_aibdatasetrecord](msdyn_aibdatasetrecord.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetrecord` |
| `msdyn_aibdatasetscontainer_DuplicateBaseRecord` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `baserecordid` | `baserecordid_msdyn_aibdatasetscontainer` |
| `msdyn_aibdatasetscontainer_DuplicateMatchingRecord` | [msdyn_aibdatasetscontainer](msdyn_aibdatasetscontainer.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibdatasetscontainer` |
| `msdyn_aibfeedbackloop_DuplicateBaseRecord` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `baserecordid` | `baserecordid_msdyn_aibfeedbackloop` |
| `msdyn_aibfeedbackloop_DuplicateMatchingRecord` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_DuplicateBaseRecord` | [msdyn_aibfile](msdyn_aibfile.md) | `baserecordid` | `baserecordid_msdyn_aibfile` |
| `msdyn_aibfile_DuplicateMatchingRecord` | [msdyn_aibfile](msdyn_aibfile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfile` |
| `msdyn_aibfileattacheddata_DuplicateBaseRecord` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `baserecordid` | `baserecordid_msdyn_aibfileattacheddata` |
| `msdyn_aibfileattacheddata_DuplicateMatchingRecord` | [msdyn_aibfileattacheddata](msdyn_aibfileattacheddata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aibfileattacheddata` |
| `msdyn_aievent_DuplicateBaseRecord` | [msdyn_aievent](msdyn_aievent.md) | `baserecordid` | `baserecordid_msdyn_aievent` |
| `msdyn_aievent_DuplicateMatchingRecord` | [msdyn_aievent](msdyn_aievent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aievent` |
| `msdyn_aiodimage_DuplicateBaseRecord` | [msdyn_aiodimage](msdyn_aiodimage.md) | `baserecordid` | `baserecordid_msdyn_aiodimage` |
| `msdyn_aiodimage_DuplicateMatchingRecord` | [msdyn_aiodimage](msdyn_aiodimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodimage` |
| `msdyn_aiodlabel_DuplicateBaseRecord` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `baserecordid` | `baserecordid_msdyn_aiodlabel` |
| `msdyn_aiodlabel_DuplicateMatchingRecord` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodlabel` |
| `msdyn_aiodtrainingboundingbox_DuplicateBaseRecord` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `baserecordid` | `baserecordid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingboundingbox_DuplicateMatchingRecord` | [msdyn_aiodtrainingboundingbox](msdyn_aiodtrainingboundingbox.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodtrainingboundingbox` |
| `msdyn_aiodtrainingimage_DuplicateBaseRecord` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `baserecordid` | `baserecordid_msdyn_aiodtrainingimage` |
| `msdyn_aiodtrainingimage_DuplicateMatchingRecord` | [msdyn_aiodtrainingimage](msdyn_aiodtrainingimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aiodtrainingimage` |
| `msdyn_aitestrunbatch_DuplicateBaseRecord` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `baserecordid` | `baserecordid_msdyn_aitestrunbatch` |
| `msdyn_aitestrunbatch_DuplicateMatchingRecord` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aitestrunbatch` |
| `msdyn_analysiscomponent_DuplicateBaseRecord` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `baserecordid` | `baserecordid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_DuplicateMatchingRecord` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysiscomponent` |
| `msdyn_analysisjob_DuplicateBaseRecord` | [msdyn_analysisjob](msdyn_analysisjob.md) | `baserecordid` | `baserecordid_msdyn_analysisjob` |
| `msdyn_analysisjob_DuplicateMatchingRecord` | [msdyn_analysisjob](msdyn_analysisjob.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisjob` |
| `msdyn_analysisoverride_DuplicateBaseRecord` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `baserecordid` | `baserecordid_msdyn_analysisoverride` |
| `msdyn_analysisoverride_DuplicateMatchingRecord` | [msdyn_analysisoverride](msdyn_analysisoverride.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisoverride` |
| `msdyn_analysisresult_DuplicateBaseRecord` | [msdyn_analysisresult](msdyn_analysisresult.md) | `baserecordid` | `baserecordid_msdyn_analysisresult` |
| `msdyn_analysisresult_DuplicateMatchingRecord` | [msdyn_analysisresult](msdyn_analysisresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisresult` |
| `msdyn_analysisresultdetail_DuplicateBaseRecord` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `baserecordid` | `baserecordid_msdyn_analysisresultdetail` |
| `msdyn_analysisresultdetail_DuplicateMatchingRecord` | [msdyn_analysisresultdetail](msdyn_analysisresultdetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisresultdetail` |
| `msdyn_appinsightsmetadata_DuplicateBaseRecord` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `baserecordid` | `baserecordid_msdyn_appinsightsmetadata` |
| `msdyn_appinsightsmetadata_DuplicateMatchingRecord` | [msdyn_appinsightsmetadata](msdyn_appinsightsmetadata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appinsightsmetadata` |
| `msdyn_copilotinteractions_DuplicateBaseRecord` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `baserecordid` | `baserecordid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_DuplicateMatchingRecord` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotinteractions` |
| `msdyn_customcontrolextendedsettings_DuplicateBaseRecord` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `baserecordid` | `baserecordid_msdyn_customcontrolextendedsettings` |
| `msdyn_customcontrolextendedsettings_DuplicateMatchingRecord` | [msdyn_customcontrolextendedsettings](msdyn_customcontrolextendedsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customcontrolextendedsettings` |
| `msdyn_dataflow_datalakefolder_DuplicateBaseRecord` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `baserecordid` | `baserecordid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_datalakefolder_DuplicateMatchingRecord` | [msdyn_dataflow_datalakefolder](msdyn_dataflow_datalakefolder.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflow_datalakefolder` |
| `msdyn_dataflow_DuplicateBaseRecord` | [msdyn_dataflow](msdyn_dataflow.md) | `baserecordid` | `baserecordid_msdyn_dataflow` |
| `msdyn_dataflow_DuplicateMatchingRecord` | [msdyn_dataflow](msdyn_dataflow.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflow` |
| `msdyn_dataflowconnectionreference_DuplicateBaseRecord` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `baserecordid` | `baserecordid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowconnectionreference_DuplicateMatchingRecord` | [msdyn_dataflowconnectionreference](msdyn_dataflowconnectionreference.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflowconnectionreference` |
| `msdyn_dataflowrefreshhistory_DuplicateBaseRecord` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `baserecordid` | `baserecordid_msdyn_dataflowrefreshhistory` |
| `msdyn_dataflowrefreshhistory_DuplicateMatchingRecord` | [msdyn_dataflowrefreshhistory](msdyn_dataflowrefreshhistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflowrefreshhistory` |
| `msdyn_dmsrequest_DuplicateBaseRecord` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `baserecordid` | `baserecordid_msdyn_dmsrequest` |
| `msdyn_dmsrequest_DuplicateMatchingRecord` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dmsrequest` |
| `msdyn_dmsrequeststatus_DuplicateBaseRecord` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `baserecordid` | `baserecordid_msdyn_dmsrequeststatus` |
| `msdyn_dmsrequeststatus_DuplicateMatchingRecord` | [msdyn_dmsrequeststatus](msdyn_dmsrequeststatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dmsrequeststatus` |
| `msdyn_entitylinkchatconfiguration_DuplicateBaseRecord` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `baserecordid` | `baserecordid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entitylinkchatconfiguration_DuplicateMatchingRecord` | [msdyn_entitylinkchatconfiguration](msdyn_entitylinkchatconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entitylinkchatconfiguration` |
| `msdyn_entityrefreshhistory_DuplicateBaseRecord` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `baserecordid` | `baserecordid_msdyn_entityrefreshhistory` |
| `msdyn_entityrefreshhistory_DuplicateMatchingRecord` | [msdyn_entityrefreshhistory](msdyn_entityrefreshhistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entityrefreshhistory` |
| `msdyn_favoriteknowledgearticle_DuplicateBaseRecord` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `baserecordid` | `baserecordid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_DuplicateMatchingRecord` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_favoriteknowledgearticle` |
| `msdyn_federatedarticle_DuplicateBaseRecord` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `baserecordid` | `baserecordid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_DuplicateMatchingRecord` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_federatedarticle` |
| `msdyn_federatedarticleincident_DuplicateBaseRecord` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `baserecordid` | `baserecordid_msdyn_federatedarticleincident` |
| `msdyn_federatedarticleincident_DuplicateMatchingRecord` | [msdyn_federatedarticleincident](msdyn_federatedarticleincident.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_federatedarticleincident` |
| `msdyn_fileupload_DuplicateBaseRecord` | [msdyn_fileupload](msdyn_fileupload.md) | `baserecordid` | `baserecordid_msdyn_fileupload` |
| `msdyn_fileupload_DuplicateMatchingRecord` | [msdyn_fileupload](msdyn_fileupload.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_fileupload` |
| `msdyn_flow_actionapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approval_DuplicateBaseRecord` | [msdyn_flow_approval](msdyn_flow_approval.md) | `baserecordid` | `baserecordid_msdyn_flow_approval` |
| `msdyn_flow_approval_DuplicateMatchingRecord` | [msdyn_flow_approval](msdyn_flow_approval.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approval` |
| `msdyn_flow_approvalrequest_DuplicateBaseRecord` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalrequest_DuplicateMatchingRecord` | [msdyn_flow_approvalrequest](msdyn_flow_approvalrequest.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalrequest` |
| `msdyn_flow_approvalresponse_DuplicateBaseRecord` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalresponse_DuplicateMatchingRecord` | [msdyn_flow_approvalresponse](msdyn_flow_approvalresponse.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalresponse` |
| `msdyn_flow_approvalstep_DuplicateBaseRecord` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_DuplicateMatchingRecord` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalstep` |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_flowapproval_DuplicateBaseRecord` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `baserecordid` | `baserecordid_msdyn_flow_flowapproval` |
| `msdyn_flow_flowapproval_DuplicateMatchingRecord` | [msdyn_flow_flowapproval](msdyn_flow_flowapproval.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_flowapproval` |
| `msdyn_formmapping_DuplicateBaseRecord` | [msdyn_formmapping](msdyn_formmapping.md) | `baserecordid` | `baserecordid_msdyn_formmapping` |
| `msdyn_formmapping_DuplicateMatchingRecord` | [msdyn_formmapping](msdyn_formmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_formmapping` |
| `msdyn_function_DuplicateBaseRecord` | [msdyn_function](msdyn_function.md) | `baserecordid` | `baserecordid_msdyn_function` |
| `msdyn_function_DuplicateMatchingRecord` | [msdyn_function](msdyn_function.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_function` |
| `msdyn_integratedsearchprovider_DuplicateBaseRecord` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `baserecordid` | `baserecordid_msdyn_integratedsearchprovider` |
| `msdyn_integratedsearchprovider_DuplicateMatchingRecord` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_integratedsearchprovider` |
| `msdyn_kalanguagesetting_DuplicateBaseRecord` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `baserecordid` | `baserecordid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_DuplicateMatchingRecord` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kalanguagesetting` |
| `msdyn_kbattachment_DuplicateBaseRecord` | [msdyn_kbattachment](msdyn_kbattachment.md) | `baserecordid` | `baserecordid_msdyn_kbattachment` |
| `msdyn_kbattachment_DuplicateMatchingRecord` | [msdyn_kbattachment](msdyn_kbattachment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kbattachment` |
| `msdyn_kmfederatedsearchconfig_DuplicateBaseRecord` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `baserecordid` | `baserecordid_msdyn_kmfederatedsearchconfig` |
| `msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kmfederatedsearchconfig` |
| `msdyn_knowledgearticleimage_DuplicateBaseRecord` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `baserecordid` | `baserecordid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticleimage_DuplicateMatchingRecord` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgearticleimage` |
| `msdyn_knowledgearticletemplate_DuplicateBaseRecord` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `baserecordid` | `baserecordid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_DuplicateMatchingRecord` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgeconfiguration_DuplicateBaseRecord` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `baserecordid` | `baserecordid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeconfiguration_DuplicateMatchingRecord` | [msdyn_knowledgeconfiguration](msdyn_knowledgeconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgeconfiguration` |
| `msdyn_knowledgeinteractioninsight_DuplicateBaseRecord` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `baserecordid` | `baserecordid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord` | [msdyn_knowledgeinteractioninsight](msdyn_knowledgeinteractioninsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgeinteractioninsight` |
| `msdyn_knowledgemanagementsetting_DuplicateBaseRecord` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `baserecordid` | `baserecordid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_DuplicateMatchingRecord` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgepersonalfilter_DuplicateBaseRecord` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `baserecordid` | `baserecordid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_DuplicateMatchingRecord` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgesearchfilter_DuplicateBaseRecord` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `baserecordid` | `baserecordid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_DuplicateMatchingRecord` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchinsight_DuplicateBaseRecord` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `baserecordid` | `baserecordid_msdyn_knowledgesearchinsight` |
| `msdyn_knowledgesearchinsight_DuplicateMatchingRecord` | [msdyn_knowledgesearchinsight](msdyn_knowledgesearchinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgesearchinsight` |
| `msdyn_mobileapp_DuplicateBaseRecord` | [msdyn_mobileapp](msdyn_mobileapp.md) | `baserecordid` | `baserecordid_msdyn_mobileapp` |
| `msdyn_mobileapp_DuplicateMatchingRecord` | [msdyn_mobileapp](msdyn_mobileapp.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_mobileapp` |
| `msdyn_modulerundetail_DuplicateBaseRecord` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `baserecordid` | `baserecordid_msdyn_modulerundetail` |
| `msdyn_modulerundetail_DuplicateMatchingRecord` | [msdyn_modulerundetail](msdyn_modulerundetail.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_modulerundetail` |
| `msdyn_pmanalysishistory_DuplicateBaseRecord` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `baserecordid` | `baserecordid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_DuplicateMatchingRecord` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmanalysishistory` |
| `msdyn_pmbusinessruleautomationconfig_DuplicateBaseRecord` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `baserecordid` | `baserecordid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmbusinessruleautomationconfig_DuplicateMatchingRecord` | [msdyn_pmbusinessruleautomationconfig](msdyn_pmbusinessruleautomationconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmbusinessruleautomationconfig` |
| `msdyn_pmcalendar_DuplicateBaseRecord` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `baserecordid` | `baserecordid_msdyn_pmcalendar` |
| `msdyn_pmcalendar_DuplicateMatchingRecord` | [msdyn_pmcalendar](msdyn_pmcalendar.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmcalendar` |
| `msdyn_pmcalendarversion_DuplicateBaseRecord` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `baserecordid` | `baserecordid_msdyn_pmcalendarversion` |
| `msdyn_pmcalendarversion_DuplicateMatchingRecord` | [msdyn_pmcalendarversion](msdyn_pmcalendarversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmcalendarversion` |
| `msdyn_pminferredtask_DuplicateBaseRecord` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `baserecordid` | `baserecordid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_DuplicateMatchingRecord` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pminferredtask` |
| `msdyn_pmprocessextendedmetadataversion_DuplicateBaseRecord` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `baserecordid` | `baserecordid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocessextendedmetadataversion_DuplicateMatchingRecord` | [msdyn_pmprocessextendedmetadataversion](msdyn_pmprocessextendedmetadataversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessextendedmetadataversion` |
| `msdyn_pmprocesstemplate_DuplicateBaseRecord` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `baserecordid` | `baserecordid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocesstemplate_DuplicateMatchingRecord` | [msdyn_pmprocesstemplate](msdyn_pmprocesstemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocesstemplate` |
| `msdyn_pmprocessusersettings_DuplicateBaseRecord` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `baserecordid` | `baserecordid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_DuplicateMatchingRecord` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessversion_DuplicateBaseRecord` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `baserecordid` | `baserecordid_msdyn_pmprocessversion` |
| `msdyn_pmprocessversion_DuplicateMatchingRecord` | [msdyn_pmprocessversion](msdyn_pmprocessversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessversion` |
| `msdyn_pmrecording_DuplicateBaseRecord` | [msdyn_pmrecording](msdyn_pmrecording.md) | `baserecordid` | `baserecordid_msdyn_pmrecording` |
| `msdyn_pmrecording_DuplicateMatchingRecord` | [msdyn_pmrecording](msdyn_pmrecording.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmrecording` |
| `msdyn_pmsimulation_DuplicateBaseRecord` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `baserecordid` | `baserecordid_msdyn_pmsimulation` |
| `msdyn_pmsimulation_DuplicateMatchingRecord` | [msdyn_pmsimulation](msdyn_pmsimulation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmsimulation` |
| `msdyn_pmtab_DuplicateBaseRecord` | [msdyn_pmtab](msdyn_pmtab.md) | `baserecordid` | `baserecordid_msdyn_pmtab` |
| `msdyn_pmtab_DuplicateMatchingRecord` | [msdyn_pmtab](msdyn_pmtab.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmtab` |
| `msdyn_pmtemplate_DuplicateBaseRecord` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `baserecordid` | `baserecordid_msdyn_pmtemplate` |
| `msdyn_pmtemplate_DuplicateMatchingRecord` | [msdyn_pmtemplate](msdyn_pmtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmtemplate` |
| `msdyn_pmview_DuplicateBaseRecord` | [msdyn_pmview](msdyn_pmview.md) | `baserecordid` | `baserecordid_msdyn_pmview` |
| `msdyn_pmview_DuplicateMatchingRecord` | [msdyn_pmview](msdyn_pmview.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmview` |
| `msdyn_qna_DuplicateBaseRecord` | [msdyn_qna](msdyn_qna.md) | `baserecordid` | `baserecordid_msdyn_qna` |
| `msdyn_qna_DuplicateMatchingRecord` | [msdyn_qna](msdyn_qna.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_qna` |
| `msdyn_schedule_DuplicateBaseRecord` | [msdyn_schedule](msdyn_schedule.md) | `baserecordid` | `baserecordid_msdyn_schedule` |
| `msdyn_schedule_DuplicateMatchingRecord` | [msdyn_schedule](msdyn_schedule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_schedule` |
| `msdyn_serviceconfiguration_DuplicateBaseRecord` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `baserecordid` | `baserecordid_msdyn_serviceconfiguration` |
| `msdyn_serviceconfiguration_DuplicateMatchingRecord` | [msdyn_serviceconfiguration](msdyn_serviceconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_serviceconfiguration` |
| `msdyn_slakpi_DuplicateBaseRecord` | [msdyn_slakpi](msdyn_slakpi.md) | `baserecordid` | `baserecordid_msdyn_slakpi` |
| `msdyn_slakpi_DuplicateMatchingRecord` | [msdyn_slakpi](msdyn_slakpi.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_slakpi` |
| `msdyn_solutionhealthrule_DuplicateBaseRecord` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthrule_DuplicateMatchingRecord` | [msdyn_solutionhealthrule](msdyn_solutionhealthrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthrule` |
| `msdyn_solutionhealthruleargument_DuplicateBaseRecord` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleargument_DuplicateMatchingRecord` | [msdyn_solutionhealthruleargument](msdyn_solutionhealthruleargument.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthruleargument` |
| `msdyn_solutionhealthruleset_DuplicateBaseRecord` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `baserecordid` | `baserecordid_msdyn_solutionhealthruleset` |
| `msdyn_solutionhealthruleset_DuplicateMatchingRecord` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_solutionhealthruleset` |
| `msdyn_virtualtablecolumncandidate_DuplicateBaseRecord` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `baserecordid` | `baserecordid_msdyn_virtualtablecolumncandidate` |
| `msdyn_virtualtablecolumncandidate_DuplicateMatchingRecord` | [msdyn_virtualtablecolumncandidate](msdyn_virtualtablecolumncandidate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_virtualtablecolumncandidate` |
| `mspcat_catalogsubmissionfiles_DuplicateBaseRecord` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `baserecordid` | `baserecordid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_DuplicateMatchingRecord` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `duplicaterecordid` | `duplicaterecordid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_DuplicateBaseRecord` | [mspcat_packagestore](mspcat_packagestore.md) | `baserecordid` | `baserecordid_mspcat_packagestore` |
| `mspcat_packagestore_DuplicateMatchingRecord` | [mspcat_packagestore](mspcat_packagestore.md) | `duplicaterecordid` | `duplicaterecordid_mspcat_packagestore` |
| `organizationdatasyncfnostate_DuplicateBaseRecord` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `baserecordid` | `baserecordid_organizationdatasyncfnostate` |
| `organizationdatasyncfnostate_DuplicateMatchingRecord` | [organizationdatasyncfnostate](organizationdatasyncfnostate.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncfnostate` |
| `organizationdatasyncstate_DuplicateBaseRecord` | [organizationdatasyncstate](organizationdatasyncstate.md) | `baserecordid` | `baserecordid_organizationdatasyncstate` |
| `organizationdatasyncstate_DuplicateMatchingRecord` | [organizationdatasyncstate](organizationdatasyncstate.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncstate` |
| `organizationdatasyncsubscription_DuplicateBaseRecord` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscription_DuplicateMatchingRecord` | [organizationdatasyncsubscription](organizationdatasyncsubscription.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscription` |
| `organizationdatasyncsubscriptionentity_DuplicateBaseRecord` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionentity_DuplicateMatchingRecord` | [organizationdatasyncsubscriptionentity](organizationdatasyncsubscriptionentity.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscriptionentity` |
| `organizationdatasyncsubscriptionfnotable_DuplicateBaseRecord` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `baserecordid` | `baserecordid_organizationdatasyncsubscriptionfnotable` |
| `organizationdatasyncsubscriptionfnotable_DuplicateMatchingRecord` | [organizationdatasyncsubscriptionfnotable](organizationdatasyncsubscriptionfnotable.md) | `duplicaterecordid` | `duplicaterecordid_organizationdatasyncsubscriptionfnotable` |
| `package_DuplicateBaseRecord` | [package](package.md) | `baserecordid` | `baserecordid_package` |
| `package_DuplicateMatchingRecord` | [package](package.md) | `duplicaterecordid` | `duplicaterecordid_package` |
| `packagehistory_DuplicateBaseRecord` | [packagehistory](packagehistory.md) | `baserecordid` | `baserecordid_packagehistory` |
| `packagehistory_DuplicateMatchingRecord` | [packagehistory](packagehistory.md) | `duplicaterecordid` | `duplicaterecordid_packagehistory` |
| `PhoneCall_DuplicateBaseRecord` | [phonecall](phonecall.md) | `baserecordid` | `baserecordid_phonecall` |
| `PhoneCall_DuplicateMatchingRecord` | [phonecall](phonecall.md) | `duplicaterecordid` | `duplicaterecordid_phonecall` |
| `powerbidataset_DuplicateBaseRecord` | [powerbidataset](powerbidataset.md) | `baserecordid` | `baserecordid_powerbidataset` |
| `powerbidataset_DuplicateMatchingRecord` | [powerbidataset](powerbidataset.md) | `duplicaterecordid` | `duplicaterecordid_powerbidataset` |
| `powerbidatasetapdx_DuplicateBaseRecord` | [powerbidatasetapdx](powerbidatasetapdx.md) | `baserecordid` | `baserecordid_powerbidatasetapdx` |
| `powerbidatasetapdx_DuplicateMatchingRecord` | [powerbidatasetapdx](powerbidatasetapdx.md) | `duplicaterecordid` | `duplicaterecordid_powerbidatasetapdx` |
| `powerbimashupparameter_DuplicateBaseRecord` | [powerbimashupparameter](powerbimashupparameter.md) | `baserecordid` | `baserecordid_powerbimashupparameter` |
| `powerbimashupparameter_DuplicateMatchingRecord` | [powerbimashupparameter](powerbimashupparameter.md) | `duplicaterecordid` | `duplicaterecordid_powerbimashupparameter` |
| `powerbireport_DuplicateBaseRecord` | [powerbireport](powerbireport.md) | `baserecordid` | `baserecordid_powerbireport` |
| `powerbireport_DuplicateMatchingRecord` | [powerbireport](powerbireport.md) | `duplicaterecordid` | `duplicaterecordid_powerbireport` |
| `powerbireportapdx_DuplicateBaseRecord` | [powerbireportapdx](powerbireportapdx.md) | `baserecordid` | `baserecordid_powerbireportapdx` |
| `powerbireportapdx_DuplicateMatchingRecord` | [powerbireportapdx](powerbireportapdx.md) | `duplicaterecordid` | `duplicaterecordid_powerbireportapdx` |
| `powerfxrule_DuplicateBaseRecord` | [powerfxrule](powerfxrule.md) | `baserecordid` | `baserecordid_powerfxrule` |
| `powerfxrule_DuplicateMatchingRecord` | [powerfxrule](powerfxrule.md) | `duplicaterecordid` | `duplicaterecordid_powerfxrule` |
| `powerpagesddosalert_DuplicateBaseRecord` | [powerpagesddosalert](powerpagesddosalert.md) | `baserecordid` | `baserecordid_powerpagesddosalert` |
| `powerpagesddosalert_DuplicateMatchingRecord` | [powerpagesddosalert](powerpagesddosalert.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesddosalert` |
| `powerpagesmanagedidentity_DuplicateBaseRecord` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `baserecordid` | `baserecordid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_DuplicateMatchingRecord` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesmanagedidentity` |
| `powerpagesscanreport_DuplicateBaseRecord` | [powerpagesscanreport](powerpagesscanreport.md) | `baserecordid` | `baserecordid_powerpagesscanreport` |
| `powerpagesscanreport_DuplicateMatchingRecord` | [powerpagesscanreport](powerpagesscanreport.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesscanreport` |
| `privilegesremovalsetting_DuplicateBaseRecord` | [privilegesremovalsetting](privilegesremovalsetting.md) | `baserecordid` | `baserecordid_privilegesremovalsetting` |
| `privilegesremovalsetting_DuplicateMatchingRecord` | [privilegesremovalsetting](privilegesremovalsetting.md) | `duplicaterecordid` | `duplicaterecordid_privilegesremovalsetting` |
| `Publisher_DuplicateBaseRecord` | [publisher](publisher.md) | `baserecordid` | `baserecordid_publisher` |
| `Publisher_DuplicateMatchingRecord` | [publisher](publisher.md) | `duplicaterecordid` | `duplicaterecordid_publisher` |
| `purviewlabelinfo_DuplicateBaseRecord` | [purviewlabelinfo](purviewlabelinfo.md) | `baserecordid` | `baserecordid_purviewlabelinfo` |
| `purviewlabelinfo_DuplicateMatchingRecord` | [purviewlabelinfo](purviewlabelinfo.md) | `duplicaterecordid` | `duplicaterecordid_purviewlabelinfo` |
| `Queue_DuplicateBaseRecord` | [queue](queue.md) | `baserecordid` | `baserecordid_queue` |
| `Queue_DuplicateMatchingRecord` | [queue](queue.md) | `duplicaterecordid` | `duplicaterecordid_queue` |
| `recordfilter_DuplicateBaseRecord` | [recordfilter](recordfilter.md) | `baserecordid` | `baserecordid_recordfilter` |
| `recordfilter_DuplicateMatchingRecord` | [recordfilter](recordfilter.md) | `duplicaterecordid` | `duplicaterecordid_recordfilter` |
| `RecurringAppointmentMaster_DuplicateBaseRecord` | [recurringappointmentmaster](recurringappointmentmaster.md) | `baserecordid` | `baserecordid_recurringappointmentmaster` |
| `RecurringAppointmentMaster_DuplicateMatchingRecord` | [recurringappointmentmaster](recurringappointmentmaster.md) | `duplicaterecordid` | `duplicaterecordid_recurringappointmentmaster` |
| `reportparameter_DuplicateBaseRecord` | [reportparameter](reportparameter.md) | `baserecordid` | `baserecordid_reportparameter` |
| `reportparameter_DuplicateMatchingRecord` | [reportparameter](reportparameter.md) | `duplicaterecordid` | `duplicaterecordid_reportparameter` |
| `retaineddataexcel_DuplicateBaseRecord` | [retaineddataexcel](retaineddataexcel.md) | `baserecordid` | `baserecordid_retaineddataexcel` |
| `retaineddataexcel_DuplicateMatchingRecord` | [retaineddataexcel](retaineddataexcel.md) | `duplicaterecordid` | `duplicaterecordid_retaineddataexcel` |
| `retentionconfig_DuplicateBaseRecord` | [retentionconfig](retentionconfig.md) | `baserecordid` | `baserecordid_retentionconfig` |
| `retentionconfig_DuplicateMatchingRecord` | [retentionconfig](retentionconfig.md) | `duplicaterecordid` | `duplicaterecordid_retentionconfig` |
| `retentionfailuredetail_DuplicateBaseRecord` | [retentionfailuredetail](retentionfailuredetail.md) | `baserecordid` | `baserecordid_retentionfailuredetail` |
| `retentionfailuredetail_DuplicateMatchingRecord` | [retentionfailuredetail](retentionfailuredetail.md) | `duplicaterecordid` | `duplicaterecordid_retentionfailuredetail` |
| `retentionoperation_DuplicateBaseRecord` | [retentionoperation](retentionoperation.md) | `baserecordid` | `baserecordid_retentionoperation` |
| `retentionoperation_DuplicateMatchingRecord` | [retentionoperation](retentionoperation.md) | `duplicaterecordid` | `duplicaterecordid_retentionoperation` |
| `retentionsuccessdetail_DuplicateBaseRecord` | [retentionsuccessdetail](retentionsuccessdetail.md) | `baserecordid` | `baserecordid_retentionsuccessdetail` |
| `retentionsuccessdetail_DuplicateMatchingRecord` | [retentionsuccessdetail](retentionsuccessdetail.md) | `duplicaterecordid` | `duplicaterecordid_retentionsuccessdetail` |
| `roleeditorlayout_DuplicateBaseRecord` | [roleeditorlayout](roleeditorlayout.md) | `baserecordid` | `baserecordid_roleeditorlayout` |
| `roleeditorlayout_DuplicateMatchingRecord` | [roleeditorlayout](roleeditorlayout.md) | `duplicaterecordid` | `duplicaterecordid_roleeditorlayout` |
| `savingrule_DuplicateBaseRecord` | [savingrule](savingrule.md) | `baserecordid` | `baserecordid_savingrule` |
| `savingrule_DuplicateMatchingRecord` | [savingrule](savingrule.md) | `duplicaterecordid` | `duplicaterecordid_savingrule` |
| `searchattributesettings_DuplicateBaseRecord` | [searchattributesettings](searchattributesettings.md) | `baserecordid` | `baserecordid_searchattributesettings` |
| `searchattributesettings_DuplicateMatchingRecord` | [searchattributesettings](searchattributesettings.md) | `duplicaterecordid` | `duplicaterecordid_searchattributesettings` |
| `searchcustomanalyzer_DuplicateBaseRecord` | [searchcustomanalyzer](searchcustomanalyzer.md) | `baserecordid` | `baserecordid_searchcustomanalyzer` |
| `searchcustomanalyzer_DuplicateMatchingRecord` | [searchcustomanalyzer](searchcustomanalyzer.md) | `duplicaterecordid` | `duplicaterecordid_searchcustomanalyzer` |
| `searchrelationshipsettings_DuplicateBaseRecord` | [searchrelationshipsettings](searchrelationshipsettings.md) | `baserecordid` | `baserecordid_searchrelationshipsettings` |
| `searchrelationshipsettings_DuplicateMatchingRecord` | [searchrelationshipsettings](searchrelationshipsettings.md) | `duplicaterecordid` | `duplicaterecordid_searchrelationshipsettings` |
| `sensitivitylabelattributemapping_DuplicateBaseRecord` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `baserecordid` | `baserecordid_sensitivitylabelattributemapping` |
| `sensitivitylabelattributemapping_DuplicateMatchingRecord` | [sensitivitylabelattributemapping](sensitivitylabelattributemapping.md) | `duplicaterecordid` | `duplicaterecordid_sensitivitylabelattributemapping` |
| `serviceplan_DuplicateBaseRecord` | [serviceplan](serviceplan.md) | `baserecordid` | `baserecordid_serviceplan` |
| `serviceplan_DuplicateMatchingRecord` | [serviceplan](serviceplan.md) | `duplicaterecordid` | `duplicaterecordid_serviceplan` |
| `serviceplanmapping_DuplicateBaseRecord` | [serviceplanmapping](serviceplanmapping.md) | `baserecordid` | `baserecordid_serviceplanmapping` |
| `serviceplanmapping_DuplicateMatchingRecord` | [serviceplanmapping](serviceplanmapping.md) | `duplicaterecordid` | `duplicaterecordid_serviceplanmapping` |
| `sharedlinksetting_DuplicateBaseRecord` | [sharedlinksetting](sharedlinksetting.md) | `baserecordid` | `baserecordid_sharedlinksetting` |
| `sharedlinksetting_DuplicateMatchingRecord` | [sharedlinksetting](sharedlinksetting.md) | `duplicaterecordid` | `duplicaterecordid_sharedlinksetting` |
| `SharePointDocumentLocation_DuplicateBaseRecord` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `baserecordid` | `baserecordid_sharepointdocumentlocation` |
| `SharePointDocumentLocation_DuplicateMatchingRecord` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `duplicaterecordid` | `duplicaterecordid_sharepointdocumentlocation` |
| `SharePointSite_DuplicateBaseRecord` | [sharepointsite](sharepointsite.md) | `baserecordid` | `baserecordid_sharepointsite` |
| `SharePointSite_DuplicateMatchingRecord` | [sharepointsite](sharepointsite.md) | `duplicaterecordid` | `duplicaterecordid_sharepointsite` |
| `SocialActivity_DuplicateBaseRecord` | [socialactivity](socialactivity.md) | `baserecordid` | `baserecordid_socialactivity` |
| `SocialActivity_DuplicateMatchingRecord` | [socialactivity](socialactivity.md) | `duplicaterecordid` | `duplicaterecordid_socialactivity` |
| `SocialProfile_DuplicateBaseRecord` | [socialprofile](socialprofile.md) | `baserecordid` | `baserecordid_socialprofile` |
| `SocialProfile_DuplicateMatchingRecord` | [socialprofile](socialprofile.md) | `duplicaterecordid` | `duplicaterecordid_socialprofile` |
| `solutioncomponentattributeconfiguration_DuplicateBaseRecord` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentattributeconfiguration` |
| `solutioncomponentattributeconfiguration_DuplicateMatchingRecord` | [solutioncomponentattributeconfiguration](solutioncomponentattributeconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentattributeconfiguration` |
| `solutioncomponentbatchconfiguration_DuplicateBaseRecord` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentbatchconfiguration` |
| `solutioncomponentbatchconfiguration_DuplicateMatchingRecord` | [solutioncomponentbatchconfiguration](solutioncomponentbatchconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentbatchconfiguration` |
| `solutioncomponentconfiguration_DuplicateBaseRecord` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentconfiguration` |
| `solutioncomponentconfiguration_DuplicateMatchingRecord` | [solutioncomponentconfiguration](solutioncomponentconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentconfiguration` |
| `solutioncomponentrelationshipconfiguration_DuplicateBaseRecord` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `baserecordid` | `baserecordid_solutioncomponentrelationshipconfiguration` |
| `solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord` | [solutioncomponentrelationshipconfiguration](solutioncomponentrelationshipconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_solutioncomponentrelationshipconfiguration` |
| `stagesolutionupload_DuplicateBaseRecord` | [stagesolutionupload](stagesolutionupload.md) | `baserecordid` | `baserecordid_stagesolutionupload` |
| `stagesolutionupload_DuplicateMatchingRecord` | [stagesolutionupload](stagesolutionupload.md) | `duplicaterecordid` | `duplicaterecordid_stagesolutionupload` |
| `supportusertable_DuplicateBaseRecord` | [supportusertable](supportusertable.md) | `baserecordid` | `baserecordid_supportusertable` |
| `supportusertable_DuplicateMatchingRecord` | [supportusertable](supportusertable.md) | `duplicaterecordid` | `duplicaterecordid_supportusertable` |
| `synapsedatabase_DuplicateBaseRecord` | [synapsedatabase](synapsedatabase.md) | `baserecordid` | `baserecordid_synapsedatabase` |
| `synapsedatabase_DuplicateMatchingRecord` | [synapsedatabase](synapsedatabase.md) | `duplicaterecordid` | `duplicaterecordid_synapsedatabase` |
| `synapselinkexternaltablestate_DuplicateBaseRecord` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `baserecordid` | `baserecordid_synapselinkexternaltablestate` |
| `synapselinkexternaltablestate_DuplicateMatchingRecord` | [synapselinkexternaltablestate](synapselinkexternaltablestate.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkexternaltablestate` |
| `synapselinkprofile_DuplicateBaseRecord` | [synapselinkprofile](synapselinkprofile.md) | `baserecordid` | `baserecordid_synapselinkprofile` |
| `synapselinkprofile_DuplicateMatchingRecord` | [synapselinkprofile](synapselinkprofile.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofile` |
| `synapselinkprofileentity_DuplicateBaseRecord` | [synapselinkprofileentity](synapselinkprofileentity.md) | `baserecordid` | `baserecordid_synapselinkprofileentity` |
| `synapselinkprofileentity_DuplicateMatchingRecord` | [synapselinkprofileentity](synapselinkprofileentity.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofileentity` |
| `synapselinkprofileentitystate_DuplicateBaseRecord` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `baserecordid` | `baserecordid_synapselinkprofileentitystate` |
| `synapselinkprofileentitystate_DuplicateMatchingRecord` | [synapselinkprofileentitystate](synapselinkprofileentitystate.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofileentitystate` |
| `synapselinkschedule_DuplicateBaseRecord` | [synapselinkschedule](synapselinkschedule.md) | `baserecordid` | `baserecordid_synapselinkschedule` |
| `synapselinkschedule_DuplicateMatchingRecord` | [synapselinkschedule](synapselinkschedule.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkschedule` |
| `SystemUser_DuplicateBaseRecord` | [systemuser](systemuser.md) | `baserecordid` | `baserecordid_systemuser` |
| `SystemUser_DuplicateMatchingRecord` | [systemuser](systemuser.md) | `duplicaterecordid` | `duplicaterecordid_systemuser` |
| `Task_DuplicateBaseRecord` | [task](task.md) | `baserecordid` | `baserecordid_task` |
| `Task_DuplicateMatchingRecord` | [task](task.md) | `duplicaterecordid` | `duplicaterecordid_task` |
| `Team_DuplicateBaseRecord` | [team](team.md) | `baserecordid` | `baserecordid_team` |
| `Team_DuplicateMatchingRecord` | [team](team.md) | `duplicaterecordid` | `duplicaterecordid_team` |
| `TransactionCurrency_DuplicateBaseRecord` | [transactioncurrency](transactioncurrency.md) | `baserecordid` | `baserecordid_transactioncurrency` |
| `TransactionCurrency_DuplicateMatchingRecord` | [transactioncurrency](transactioncurrency.md) | `duplicaterecordid` | `duplicaterecordid_transactioncurrency` |
| `unstructuredfilesearchentity_DuplicateBaseRecord` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `baserecordid` | `baserecordid_unstructuredfilesearchentity` |
| `unstructuredfilesearchentity_DuplicateMatchingRecord` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `duplicaterecordid` | `duplicaterecordid_unstructuredfilesearchentity` |
| `unstructuredfilesearchrecord_DuplicateBaseRecord` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `baserecordid` | `baserecordid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_DuplicateMatchingRecord` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `duplicaterecordid` | `duplicaterecordid_unstructuredfilesearchrecord` |
| `userrating_DuplicateBaseRecord` | [userrating](userrating.md) | `baserecordid` | `baserecordid_userrating` |
| `userrating_DuplicateMatchingRecord` | [userrating](userrating.md) | `duplicaterecordid` | `duplicaterecordid_userrating` |
| `workflowmetadata_DuplicateBaseRecord` | [workflowmetadata](workflowmetadata.md) | `baserecordid` | `baserecordid_workflowmetadata` |
| `workflowmetadata_DuplicateMatchingRecord` | [workflowmetadata](workflowmetadata.md) | `duplicaterecordid` | `duplicaterecordid_workflowmetadata` |
| `workqueue_DuplicateBaseRecord` | [workqueue](workqueue.md) | `baserecordid` | `baserecordid_workqueue` |
| `workqueue_DuplicateMatchingRecord` | [workqueue](workqueue.md) | `duplicaterecordid` | `duplicaterecordid_workqueue` |
| `workqueueitem_DuplicateBaseRecord` | [workqueueitem](workqueueitem.md) | `baserecordid` | `baserecordid_workqueueitem` |
| `workqueueitem_DuplicateMatchingRecord` | [workqueueitem](workqueueitem.md) | `duplicaterecordid` | `duplicaterecordid_workqueueitem` |



## Source

Generated from [duplicaterecord.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/duplicaterecord.md) on 2026-05-06.