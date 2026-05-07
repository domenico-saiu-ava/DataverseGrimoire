---
logical: "annotation"
display: "Note"
entitySetName: "annotations"
primaryId: "annotationid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["nota", "note", "allegato", "allegati"]
synonyms_en: ["note", "annotation", "attachment"]
---

# Note

Note that is attached to one or more objects, including other notes.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `annotation` |
| Display name | Note |
| Display (plural) | Notes |
| Schema name | `Annotation` |
| Entity set (Web API) | `annotations` |
| Primary id attribute | `annotationid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/annotations?$select=subject&$top=10
GET /api/data/v9.2/annotations(<guid>)
POST /api/data/v9.2/annotations
PATCH /api/data/v9.2/annotations(<guid>)
DELETE /api/data/v9.2/annotations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **19**

### Writable

`AnnotationId`, `DocumentBody`, `FileName`, `ImportSequenceNumber`, `IsDocument`, `LangId`, `MimeType`, `NoteText`, `ObjectId`, `ObjectIdTypeCode`, `ObjectTypeCode`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `StepId`, `Subject`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DummyFileName`, `DummyRegarding`, `FilePointer`, `FileSize`, `IsPrivate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Prefix`, `StoragePointer`, `VersionNumber`

## Relationships

### Many-to-One (39)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Annotation` | [account](account.md) | `objectid` | `objectid_account` |
| `adx_invitation_Annotations` | [adx_invitation](adx_invitation.md) | `objectid` | `objectid_adx_invitation` |
| `adx_inviteredemption_Annotations` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_portalcomment_Annotations` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `annotation_owning_user` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `Appointment_Annotation` | [appointment](appointment.md) | `objectid` | `objectid_appointment` |
| `approvalprocess_Annotations` | [approvalprocess](approvalprocess.md) | `objectid` | `objectid_approvalprocess` |
| `approvalstageapproval_Annotations` | [approvalstageapproval](approvalstageapproval.md) | `objectid` | `objectid_approvalstageapproval` |
| `business_unit_annotations` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `Calendar_Annotation` | [calendar](calendar.md) | `objectid` | `objectid_calendar` |
| `chat_Annotations` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `Contact_Annotation` | [contact](contact.md) | `objectid` | `objectid_contact` |
| `DuplicateRule_Annotation` | [duplicaterule](duplicaterule.md) | `objectid` | `objectid_duplicaterule` |
| `Email_Annotation` | [email](email.md) | `objectid` | `objectid_email` |
| `EmailServerProfile_Annotation` | [emailserverprofile](emailserverprofile.md) | `objectid` | `objectid_emailserverprofile` |
| `Fax_Annotation` | [fax](fax.md) | `objectid` | `objectid_fax` |
| `Goal_Annotation` | [goal](goal.md) | `objectid` | `objectid_goal` |
| `KbArticle_Annotation` | [kbarticle](kbarticle.md) | `objectid` | `objectid_kbarticle` |
| `knowledgearticle_Annotations` | [knowledgearticle](knowledgearticle.md) | `objectid` | `objectid_knowledgearticle` |
| `KnowledgeBaseRecord_Annotations` | [knowledgebaserecord](knowledgebaserecord.md) | `objectid` | `objectid_knowledgebaserecord` |
| `Letter_Annotation` | [letter](letter.md) | `objectid` | `objectid_letter` |
| `lk_annotationbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_annotationbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_annotationbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_annotationbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Mailbox_Annotation` | [mailbox](mailbox.md) | `objectid` | `objectid_mailbox` |
| `msdyn_aifptrainingdocument_Annotations` | [msdyn_aifptrainingdocument](msdyn_aifptrainingdocument.md) | `objectid` | `objectid_msdyn_aifptrainingdocument` |
| `msdyn_aimodel_Annotations` | [msdyn_aimodel](msdyn_aimodel.md) | `objectid` | `objectid_msdyn_aimodel` |
| `msdyn_aiodimage_Annotations` | [msdyn_aiodimage](msdyn_aiodimage.md) | `objectid` | `objectid_msdyn_aiodimage` |
| `msdyn_flow_approval_Annotations` | [msdyn_flow_approval](msdyn_flow_approval.md) | `objectid` | `objectid_msdyn_flow_approval` |
| `mspcat_catalogsubmissionfiles_Annotations` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `owner_annotations` | [owner](owner.md) | `ownerid` | `ownerid` |
| `PhoneCall_Annotation` | [phonecall](phonecall.md) | `objectid` | `objectid_phonecall` |
| `RecurringAppointmentMaster_Annotation` | [recurringappointmentmaster](recurringappointmentmaster.md) | `objectid` | `objectid_recurringappointmentmaster` |
| `sla_Annotation` | [sla](sla.md) | `objectid` | `objectid_sla` |
| `SocialActivity_Annotation` | [socialactivity](socialactivity.md) | `objectid` | `objectid_socialactivity` |
| `Task_Annotation` | [task](task.md) | `objectid` | `objectid_task` |
| `team_annotations` | [team](team.md) | `owningteam` | `owningteam` |
| `Workflow_Annotation` | [workflow](workflow.md) | `objectid` | `objectid_workflow` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Annotation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Annotation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Annotation_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Annotation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [annotation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/annotation.md) on 2026-05-06.