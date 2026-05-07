---
logical: "fileattachment"
display: "FileAttachment"
entitySetName: "fileattachments"
primaryId: "fileattachmentid"
primaryName: "filename"
tableType: "Standard"
ownership: "None"
---

# FileAttachment

File Attachment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fileattachment` |
| Display name | FileAttachment |
| Display (plural) | FileAttachments |
| Schema name | `FileAttachment` |
| Entity set (Web API) | `fileattachments` |
| Primary id attribute | `fileattachmentid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/fileattachments?$select=filename&$top=10
GET /api/data/v9.2/fileattachments(<guid>)
POST /api/data/v9.2/fileattachments
PATCH /api/data/v9.2/fileattachments(<guid>)
DELETE /api/data/v9.2/fileattachments(<guid>)
```

## Attributes

Writable: **7** · Read-only: **8**

### Writable

`FileAttachmentId`, `FileName`, `MimeType`, `ObjectId`, `ObjectIdTypeCode`, `ObjectTypeCode`, `RegardingFieldName`

### Read-only

`Body`, `CreatedOn`, `FilePointer`, `FileSizeInBytes`, `IsCommitted`, `Prefix`, `StoragePointer`, `VersionNumber`

## Relationships

### Many-to-One (53)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activityfileattachment_FileAttachments` | [activityfileattachment](activityfileattachment.md) | `objectid` | `objectid_activityfileattachment` |
| `activitypointer_FileAttachments` | [activitypointer](activitypointer.md) | `objectid` | `objectid_activitypointer` |
| `approvalprocess_FileAttachments` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalstageintelligent_FileAttachments` | [approvalstageintelligent](approvalstageintelligent.md) | `objectid` | `objectid_approvalstageintelligent` |
| `asyncoperation_FileAttachments` | [asyncoperation](asyncoperation.md) | `objectid` | `objectid_asyncoperation` |
| `botcomponent_FileAttachments` | [botcomponent](botcomponent.md) | `objectid` | `objectid_botcomponent` |
| `canvasapp_FileAttachments` | [canvasapp](canvasapp.md) | `objectid` | `objectid_canvasapp` |
| `desktopflowbinary_FileAttachments` | [desktopflowbinary](desktopflowbinary.md) | `objectid` | `objectid_desktopflowbinary` |
| `desktopflowmodule_FileAttachments` | [desktopflowmodule](desktopflowmodule.md) | `objectid` | `objectid_desktopflowmodule` |
| `email_FileAttachments` | [email](email.md) | `objectid` | `objectid_email` |
| `exportedexcel_FileAttachments` | [exportedexcel](exportedexcel.md) | `objectid` | `objectid_exportedexcel` |
| `exportsolutionupload_FileAttachments` | [exportsolutionupload](exportsolutionupload.md) | `objectid` | `objectid_exportsolutionupload` |
| `FileAttachment_Solution` | [solution](solution.md) | `objectid` | `FileAttachment_Solution` |
| `flowmachineimageversion_FileAttachments` | [flowmachineimageversion](flowmachineimageversion.md) | `objectid` | `objectid_flowmachineimageversion` |
| `flowsession_FileAttachments` | [flowsession](flowsession.md) | `objectid` | `objectid_flowsession` |
| `flowsessionbinary_FileAttachments` | [flowsessionbinary](flowsessionbinary.md) | `objectid` | `objectid_flowsessionbinary` |
| `knowledgearticle_FileAttachments` | [knowledgearticle](knowledgearticle.md) | `objectid` | `objectid_knowledgearticle` |
| `mailbox_FileAttachments` | [mailbox](mailbox.md) | `objectid` | `objectid_mailbox` |
| `msdyn_aibfeedbackloop_FileAttachments` | [msdyn_aibfeedbackloop](msdyn_aibfeedbackloop.md) | `objectid` | `objectid_msdyn_aibfeedbackloop` |
| `msdyn_aibfile_FileAttachments` | [msdyn_aibfile](msdyn_aibfile.md) | `objectid` | `objectid_msdyn_aibfile` |
| `msdyn_aiconfiguration_FileAttachments` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `objectid` | `objectid_msdyn_aiconfiguration` |
| `msdyn_aidataprocessingevent_FileAttachments` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `objectid` | `objectid_msdyn_aidataprocessingevent` |
| `msdyn_aidocumenttemplate_FileAttachments` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | `objectid` | `objectid_msdyn_aidocumenttemplate` |
| `msdyn_aievent_FileAttachments` | [msdyn_aievent](msdyn_aievent.md) | `objectid` | `objectid_msdyn_aievent` |
| `msdyn_aitestcasedocument_FileAttachments` | [msdyn_aitestcasedocument](msdyn_aitestcasedocument.md) | `objectid` | `objectid_msdyn_aitestcasedocument` |
| `msdyn_analysisjob_FileAttachments` | [msdyn_analysisjob](msdyn_analysisjob.md) | `objectid` | `objectid_msdyn_analysisjob` |
| `msdyn_fileupload_FileAttachments` | [msdyn_fileupload](msdyn_fileupload.md) | `objectid` | `objectid_msdyn_fileupload` |
| `msdyn_integratedsearchprovider_FileAttachments` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `objectid` | `objectid_msdyn_integratedsearchprovider` |
| `msdyn_kbattachment_FileAttachments` | [msdyn_kbattachment](msdyn_kbattachment.md) | `objectid` | `objectid_msdyn_kbattachment` |
| `msdyn_knowledgearticleimage_FileAttachments` | [msdyn_knowledgearticleimage](msdyn_knowledgearticleimage.md) | `objectid` | `objectid_msdyn_knowledgearticleimage` |
| `msdyn_mobileapp_FileAttachments` | [msdyn_mobileapp](msdyn_mobileapp.md) | `objectid` | `objectid_msdyn_mobileapp` |
| `msdyn_pminferredtask_FileAttachments` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `objectid` | `objectid_msdyn_pminferredtask` |
| `msdyn_richtextfile_FileAttachments` | [msdyn_richtextfile](msdyn_richtextfile.md) | `objectid` | `objectid_msdyn_richtextfile` |
| `mspcat_catalogsubmissionfiles_FileAttachments` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `mspcat_packagestore_FileAttachments` | [mspcat_packagestore](mspcat_packagestore.md) | `objectid` | `objectid_mspcat_packagestore` |
| `package_FileAttachments` | [package](package.md) | `objectid` | `objectid_package` |
| `packagehistory_FileAttachments` | [packagehistory](packagehistory.md) | `objectid` | `objectid_packagehistory` |
| `pluginpackage_FileAttachments` | [pluginpackage](pluginpackage.md) | `objectid` | `objectid_pluginpackage` |
| `powerbidataset_FileAttachments` | [powerbidataset](powerbidataset.md) | `objectid` | `objectid_powerbidataset` |
| `powerbireport_FileAttachments` | [powerbireport](powerbireport.md) | `objectid` | `objectid_powerbireport` |
| `powerpagecomponent_FileAttachments` | [powerpagecomponent](powerpagecomponent.md) | `objectid` | `objectid_powerpagecomponent` |
| `powerpagesitepublished_FileAttachments` | [powerpagesitepublished](powerpagesitepublished.md) | `objectid` | `objectid_powerpagesitepublished` |
| `powerpagesscanreport_FileAttachments` | [powerpagesscanreport](powerpagesscanreport.md) | `objectid` | `objectid_powerpagesscanreport` |
| `powerpagessourcefile_FileAttachments` | [powerpagessourcefile](powerpagessourcefile.md) | `objectid` | `objectid_powerpagessourcefile` |
| `report_FileAttachments` | [report](report.md) | `objectid` | `objectid_report` |
| `retaineddataexcel_FileAttachments` | [retaineddataexcel](retaineddataexcel.md) | `objectid` | `objectid_retaineddataexcel` |
| `searchcustomanalyzer_FileAttachments` | [searchcustomanalyzer](searchcustomanalyzer.md) | `objectid` | `objectid_searchcustomanalyzer` |
| `stagesolutionupload_FileAttachments` | [stagesolutionupload](stagesolutionupload.md) | `objectid` | `objectid_stagesolutionupload` |
| `unstructuredfilesearchrecord_FileAttachments` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `objectid` | `objectid_unstructuredfilesearchrecord` |
| `webresource_FileAttachments` | [webresource](webresource.md) | `objectid` | `objectid_webresource` |
| `workflowbinary_FileAttachments` | [workflowbinary](workflowbinary.md) | `objectid` | `objectid_workflowbinary` |
| `workflowlog_FileAttachments` | [workflowlog](workflowlog.md) | `objectid` | `objectid_workflowlog` |
| `workflowmetadata_FileAttachments` | [workflowmetadata](workflowmetadata.md) | `objectid` | `objectid_workflowmetadata` |

### One-to-Many (89)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_activityfileattachment_FileContent` | _n/a_ | `filecontent` | _n/a_ |
| `FileAttachment_ActivityPointer_DescriptionBlobId` | _n/a_ | `descriptionblobid` | _n/a_ |
| `FileAttachment_approvalprocess_Inputs` | _n/a_ | `inputs` | _n/a_ |
| `FileAttachment_approvalprocess_Stages` | _n/a_ | `stages` | _n/a_ |
| `FileAttachment_approvalstageintelligent_Inputs` | _n/a_ | `inputs` | _n/a_ |
| `FileAttachment_AsyncOperation_DataBlobId` | _n/a_ | `datablobid` | _n/a_ |
| `FileAttachment_botcomponent_FileData` | _n/a_ | `filedata` | _n/a_ |
| `FileAttachment_CanvasApp_Assets` | _n/a_ | `assets` | _n/a_ |
| `FileAttachment_CanvasApp_BackgroundImage` | _n/a_ | `background_image` | _n/a_ |
| `FileAttachment_CanvasApp_Document` | _n/a_ | `document` | _n/a_ |
| `FileAttachment_CanvasApp_LargeIcon` | _n/a_ | `large_icon` | _n/a_ |
| `FileAttachment_CanvasApp_MediumIcon` | _n/a_ | `medium_icon` | _n/a_ |
| `FileAttachment_CanvasApp_SmallIcon` | _n/a_ | `small_icon` | _n/a_ |
| `FileAttachment_CanvasApp_TeamsIcon` | _n/a_ | `teams_icon` | _n/a_ |
| `FileAttachment_CanvasApp_WideIcon` | _n/a_ | `wide_icon` | _n/a_ |
| `FileAttachment_desktopflowbinary_Data` | _n/a_ | `data` | _n/a_ |
| `FileAttachment_desktopflowmodule_Data` | _n/a_ | `data` | _n/a_ |
| `FileAttachment_Email_DescriptionBlobId` | _n/a_ | `descriptionblobid` | _n/a_ |
| `FileAttachment_exportedexcel_ExcelContent` | _n/a_ | `excelcontent` | _n/a_ |
| `FileAttachment_ExportSolutionUpload_SolutionFile` | _n/a_ | `solutionfile` | _n/a_ |
| `FileAttachment_flowmachineimageversion_generalizationlogs` | _n/a_ | `generalizationlogs` | _n/a_ |
| `FileAttachment_FlowSession_AdditionalContext` | _n/a_ | `additionalcontext` | _n/a_ |
| `FileAttachment_FlowSession_Inputs` | _n/a_ | `inputs` | _n/a_ |
| `FileAttachment_FlowSession_Outputs` | _n/a_ | `outputs` | _n/a_ |
| `FileAttachment_flowsessionbinary_Data` | _n/a_ | `data` | _n/a_ |
| `FileAttachment_KnowledgeArticle_msdyn_contentstore` | _n/a_ | `msdyn_contentstore` | _n/a_ |
| `FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef` | _n/a_ | `exchangesyncstatexmlfileref` | _n/a_ |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionInput` | _n/a_ | `msdyn_predictioninput` | _n/a_ |
| `FileAttachment_msdyn_AIBFeedbackLoop_msdyn_PredictionResult` | _n/a_ | `msdyn_predictionresult` | _n/a_ |
| `FileAttachment_msdyn_AIBFile_msdyn_File` | _n/a_ | `msdyn_file` | _n/a_ |
| `FileAttachment_msdyn_AIConfiguration_msdyn_Model` | _n/a_ | `msdyn_model` | _n/a_ |
| `FileAttachment_msdyn_AIDataProcessingEvent_msdyn_InputData` | _n/a_ | `msdyn_inputdata` | _n/a_ |
| `FileAttachment_msdyn_aidocumenttemplate_msdyn_document` | _n/a_ | `msdyn_document` | _n/a_ |
| `FileAttachment_msdyn_AIEvent_msdyn_DataInfoFile` | _n/a_ | `msdyn_datainfofile` | _n/a_ |
| `FileAttachment_msdyn_AIEvent_msdyn_OutputFile` | _n/a_ | `msdyn_outputfile` | _n/a_ |
| `FileAttachment_msdyn_AITestCaseDocument_msdyn_InputFile` | _n/a_ | `msdyn_inputfile` | _n/a_ |
| `FileAttachment_msdyn_analysisjob_msdyn_AnalysisJobsReport` | _n/a_ | `msdyn_analysisjobsreport` | _n/a_ |
| `FileAttachment_msdyn_FileUpload_msdyn_ErrorLog` | _n/a_ | `msdyn_errorlog` | _n/a_ |
| `FileAttachment_msdyn_FileUpload_msdyn_FileContent` | _n/a_ | `msdyn_filecontent` | _n/a_ |
| `FileAttachment_msdyn_integratedsearchprovider_msdyn_htmlsample` | _n/a_ | `msdyn_htmlsample` | _n/a_ |
| `FileAttachment_msdyn_kbattachment_msdyn_fileattachment` | _n/a_ | `msdyn_fileattachment` | _n/a_ |
| `FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile` | _n/a_ | `msdyn_blobfile` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon1024x1024` | _n/a_ | `msdyn_appicon1024x1024` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon120x120` | _n/a_ | `msdyn_appicon120x120` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon152x152` | _n/a_ | `msdyn_appicon152x152` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon167x167` | _n/a_ | `msdyn_appicon167x167` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIcon180x180` | _n/a_ | `msdyn_appicon180x180` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconHdpi` | _n/a_ | `msdyn_appiconhdpi` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconMdpi` | _n/a_ | `msdyn_appiconmdpi` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXdpi` | _n/a_ | `msdyn_appiconxdpi` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXxhdpi` | _n/a_ | `msdyn_appiconxxhdpi` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_appIconXxxhdpi` | _n/a_ | `msdyn_appiconxxxhdpi` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_launchAppResources` | _n/a_ | `msdyn_launchappresources` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_mobileAppDefinitionAndroid` | _n/a_ | `msdyn_mobileappdefinitionandroid` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_mobileAppDefinitionIOS` | _n/a_ | `msdyn_mobileappdefinitionios` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_proDev_customPackage` | _n/a_ | `msdyn_prodev_custompackage` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_pushNotificationsAndroidJson` | _n/a_ | `msdyn_pushnotificationsandroidjson` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_pushNotificationsIosPlist` | _n/a_ | `msdyn_pushnotificationsiosplist` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantSplashImage` | _n/a_ | `msdyn_tenantsplashimage` | _n/a_ |
| `FileAttachment_msdyn_mobileapp_msdyn_tenantWelcomeImage` | _n/a_ | `msdyn_tenantwelcomeimage` | _n/a_ |
| `FileAttachment_msdyn_pminferredtask_msdyn_lasterrorsreport` | _n/a_ | `msdyn_lasterrorsreport` | _n/a_ |
| `FileAttachment_msdyn_richtextfile_msdyn_fileblob` | _n/a_ | `msdyn_fileblob` | _n/a_ |
| `FileAttachment_mspcat_CatalogSubmissionFiles_mspcat_File` | _n/a_ | `mspcat_file` | _n/a_ |
| `FileAttachment_mspcat_PackageStore_mspcat_PackageFile` | _n/a_ | `mspcat_packagefile` | _n/a_ |
| `FileAttachment_package_DeploymentLog` | _n/a_ | `deploymentlog` | _n/a_ |
| `FileAttachment_packagehistory_DeploymentLog` | _n/a_ | `deploymentlog` | _n/a_ |
| `FileAttachment_packagehistory_PackageFile` | _n/a_ | `packagefile` | _n/a_ |
| `FileAttachment_pluginpackage_FileId` | _n/a_ | `fileid` | _n/a_ |
| `FileAttachment_pluginpackage_Package` | _n/a_ | `package` | _n/a_ |
| `FileAttachment_powerbidataset_Package` | _n/a_ | `package` | _n/a_ |
| `FileAttachment_powerbireport_Package` | _n/a_ | `package` | _n/a_ |
| `FileAttachment_powerpagecomponent_filecontent` | _n/a_ | `filecontent` | _n/a_ |
| `FileAttachment_powerpagesitepublished_publishedmetadata` | _n/a_ | `publishedmetadata` | _n/a_ |
| `FileAttachment_powerpagesitepublished_publishedsource` | _n/a_ | `publishedsource` | _n/a_ |
| `FileAttachment_PowerPagesScanReport_FileContent` | _n/a_ | `filecontent` | _n/a_ |
| `FileAttachment_powerpagessourcefile_filecontent` | _n/a_ | `filecontent` | _n/a_ |
| `FileAttachment_Report_FileContent` | _n/a_ | `filecontent` | _n/a_ |
| `FileAttachment_retaineddataexcel_ExcelContent` | _n/a_ | `excelcontent` | _n/a_ |
| `FileAttachment_searchcustomanalyzer_analyzers` | _n/a_ | `analyzers` | _n/a_ |
| `fileattachment_solution_fileid` | _n/a_ | `fileid` | _n/a_ |
| `FileAttachment_StageSolutionUpload_SolutionFile` | _n/a_ | `solutionfile` | _n/a_ |
| `FileAttachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `FileAttachment_unstructuredfilesearchrecord_Filedata` | _n/a_ | `filedata` | _n/a_ |
| `FileAttachment_WebResource_ContentFileRef` | _n/a_ | `contentfileref` | _n/a_ |
| `FileAttachment_WebResource_ContentJsonFileRef` | _n/a_ | `contentjsonfileref` | _n/a_ |
| `FileAttachment_workflowbinary_Data` | _n/a_ | `data` | _n/a_ |
| `FileAttachment_WorkflowLog_Inputs` | _n/a_ | `inputs` | _n/a_ |
| `FileAttachment_WorkflowLog_Outputs` | _n/a_ | `outputs` | _n/a_ |
| `FileAttachment_WorkflowMetadata_FileValue` | _n/a_ | `filevalue` | _n/a_ |


## Source

Generated from [fileattachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fileattachment.md) on 2026-05-06.