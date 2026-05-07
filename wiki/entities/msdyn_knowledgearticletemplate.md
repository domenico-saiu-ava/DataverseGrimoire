---
logical: "msdyn_knowledgearticletemplate"
display: "Knowledge Article Template"
entitySetName: "msdyn_knowledgearticletemplates"
primaryId: "msdyn_knowledgearticletemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Article Template

Organizational Knowledge Article Template for Internal and external creation of Knowledge Articles.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticletemplate` |
| Display name | Knowledge Article Template |
| Display (plural) | Knowledge Article Templates |
| Schema name | `msdyn_knowledgearticletemplate` |
| Entity set (Web API) | `msdyn_knowledgearticletemplates` |
| Primary id attribute | `msdyn_knowledgearticletemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgearticletemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgearticletemplates(<guid>)
POST /api/data/v9.2/msdyn_knowledgearticletemplates
PATCH /api/data/v9.2/msdyn_knowledgearticletemplates(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgearticletemplates(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Content`, `msdyn_Description`, `msdyn_isinternal`, `msdyn_keywords`, `msdyn_knowledgearticletemplateId`, `msdyn_languagelocaleid`, `msdyn_LanguageLocaleIdName`, `msdyn_name`, `msdyn_sectiondetails`, `msdyn_subjectid`, `msdyn_title`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_knowledgearticletemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_knowledgearticletemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgearticletemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgearticletemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgearticletemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_subject_knowledgearticletemplate_subjectid` | [subject](subject.md) | `msdyn_subjectid` | `msdyn_subjectid` |
| `owner_msdyn_knowledgearticletemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_knowledgearticletemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_knowledgearticletemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticletemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_knowledgearticletemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_knowledgearticletemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_SharePointDocumentLocations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticletemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_knowledgearticletemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_knowledgearticletemplate.md) on 2026-05-06.