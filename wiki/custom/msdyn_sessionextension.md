---
logical: "msdyn_sessionextension"
display: "Analisi sessione"
entitySetName: "msdyn_sessionextensions"
primaryId: "msdyn_sessionextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi sessione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sessionextension` |
| Display name | Analisi sessione |
| Display (plural) | Analisi sessione |
| Schema name | `msdyn_sessionextension` |
| Entity set (Web API) | `msdyn_sessionextensions` |
| Primary id attribute | `msdyn_sessionextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sessionextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sessionextensions(<guid>)
POST /api/data/v9.2/msdyn_sessionextensions
PATCH /api/data/v9.2/msdyn_sessionextensions(<guid>)
DELETE /api/data/v9.2/msdyn_sessionextensions(<guid>)
```

## Attributes

Writable: **28** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_additionalmetadata`, `msdyn_callbackacceptedtime`, `msdyn_callbackcustomeraddedtime`, `msdyn_intentfamilyid`, `msdyn_intentgroupid`, `msdyn_intentid`, `msdyn_intentstring`, `msdyn_isengaged`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_ocsessionid`, `msdyn_outcome`, `msdyn_outcomereason`, `msdyn_overflowaction`, `msdyn_overflowcondition`, `msdyn_overflowtriggertimestamp`, `msdyn_routingtype`, `msdyn_sessionextensionid`, `msdyn_sessionid`, `msdyn_sourceintentcalculation`, `msdyn_usertype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sessionextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sessionextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sessionextension` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_sessionextension_ocliveworkitemid_msdyn_ocliveworkitem` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |
| `msdyn_sessionextension_sessionid_msdyn_ocsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_sessionid` | `msdyn_sessionid` |
| `lk_msdyn_sessionextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sessionextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sessionextension_SyncErrors` | [msdyn_sessionextension](msdyn_sessionextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionextension` |
| `msdyn_sessionextension_DuplicateMatchingRecord` | [msdyn_sessionextension](msdyn_sessionextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sessionextension` |
| `msdyn_sessionextension_DuplicateBaseRecord` | [msdyn_sessionextension](msdyn_sessionextension.md) | `baserecordid` | `baserecordid_msdyn_sessionextension` |
| `msdyn_sessionextension_AsyncOperations` | [msdyn_sessionextension](msdyn_sessionextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionextension` |
| `msdyn_sessionextension_MailboxTrackingFolders` | [msdyn_sessionextension](msdyn_sessionextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionextension` |
| `msdyn_sessionextension_UserEntityInstanceDatas` | [msdyn_sessionextension](msdyn_sessionextension.md) | `objectid` | `objectid_msdyn_sessionextension` |
| `msdyn_sessionextension_ProcessSession` | [msdyn_sessionextension](msdyn_sessionextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionextension` |
| `msdyn_sessionextension_BulkDeleteFailures` | [msdyn_sessionextension](msdyn_sessionextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_sessionextension` |
| `msdyn_sessionextension_PrincipalObjectAttributeAccesses` | [msdyn_sessionextension](msdyn_sessionextension.md) | `objectid` | `objectid_msdyn_sessionextension` |


## Source

Generated from [msdyn_sessionextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sessionextension')) on 2026-05-07.