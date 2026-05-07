---
logical: "msdyn_ocliveworkitemextension"
display: "Analisi di conversazione"
entitySetName: "msdyn_ocliveworkitemextensions"
primaryId: "msdyn_ocliveworkitemextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Analisi di conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemextension` |
| Display name | Analisi di conversazione |
| Display (plural) | Analisi conversazione |
| Schema name | `msdyn_ocliveworkitemextension` |
| Entity set (Web API) | `msdyn_ocliveworkitemextensions` |
| Primary id attribute | `msdyn_ocliveworkitemextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemextensions
PATCH /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemextensions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_evaluationid`, `msdyn_lobbyendtime`, `msdyn_lobbystarttime`, `msdyn_name`, `msdyn_ocliveworkitemextensionid`, `msdyn_predictedcsatscore`, `msdyn_reviewedcsatscore`, `msdyn_score`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_ocliveworkitemextension` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitem_ocliveworkitemextensionid_msdyn_ocliveworkitemextension` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `msdyn_ocliveworkitemextensionid` | `msdyn_ocliveworkitemextensionid_msdyn_ocliveworkitem` |
| `msdyn_ocliveworkitemextension_SyncErrors` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_DuplicateMatchingRecord` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_DuplicateBaseRecord` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `baserecordid` | `baserecordid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_AsyncOperations` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_MailboxTrackingFolders` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_UserEntityInstanceDatas` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `objectid` | `objectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_ProcessSession` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_BulkDeleteFailures` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemextension` |
| `msdyn_ocliveworkitemextension_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemextension](msdyn_ocliveworkitemextension.md) | `objectid` | `objectid_msdyn_ocliveworkitemextension` |


## Source

Generated from [msdyn_ocliveworkitemextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemextension')) on 2026-05-07.