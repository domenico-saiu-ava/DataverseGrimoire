---
logical: "msdyn_knowledgearticletemplate"
display: "Modello di articolo della Knowledge Base"
entitySetName: "msdyn_knowledgearticletemplates"
primaryId: "msdyn_knowledgearticletemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di articolo della Knowledge Base

Modello di articolo della Knowledge Base dell'organizzazione per la creazione interna ed esterna di articoli della Knowledge Base.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticletemplate` |
| Display name | Modello di articolo della Knowledge Base |
| Display (plural) | Modelli di articolo della Knowledge Base |
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

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_LanguageLocaleIdName`, `msdyn_content`, `msdyn_description`, `msdyn_isinternal`, `msdyn_keywords`, `msdyn_knowledgearticletemplateid`, `msdyn_languagelocaleid`, `msdyn_name`, `msdyn_sectiondetails`, `msdyn_subjectid`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgearticletemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgearticletemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgearticletemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgearticletemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgearticletemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgearticletemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgearticletemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgearticletemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_subject_knowledgearticletemplate_subjectid` | [subject](subject.md) | `msdyn_subjectid` | `msdyn_subjectid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticletemplate_SyncErrors` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_DuplicateMatchingRecord` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_DuplicateBaseRecord` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `baserecordid` | `baserecordid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_SharePointDocumentLocations` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_SharePointDocuments` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_AsyncOperations` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_MailboxTrackingFolders` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_UserEntityInstanceDatas` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `objectid` | `objectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_ProcessSession` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_BulkDeleteFailures` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `objectid` | `objectid_msdyn_knowledgearticletemplate` |
| `msdyn_knowledgearticletemplate_QueueItems` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `objectid` | `objectid_msdyn_knowledgearticletemplate` |


## Source

Generated from [msdyn_knowledgearticletemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgearticletemplate')) on 2026-05-07.