---
logical: "msdyn_customeremailcommunication"
display: "Comunicazione e-mail del cliente"
entitySetName: "msdyn_customeremailcommunications"
primaryId: "msdyn_customeremailcommunicationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Comunicazione e-mail del cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customeremailcommunication` |
| Display name | Comunicazione e-mail del cliente |
| Display (plural) | Comunicazione e-mail del cliente |
| Schema name | `msdyn_customeremailcommunication` |
| Entity set (Web API) | `msdyn_customeremailcommunications` |
| Primary id attribute | `msdyn_customeremailcommunicationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customeremailcommunications?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
POST /api/data/v9.2/msdyn_customeremailcommunications
PATCH /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
DELETE /api/data/v9.2/msdyn_customeremailcommunications(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_customeremailcommunicationid`, `msdyn_emailcounter`, `msdyn_emailparams`, `msdyn_name`, `msdyn_scheduledat`, `msdyn_templateid`, `msdyn_templatetype`, `msdyn_touserid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customeremailcommunication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customeremailcommunication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customeremailcommunication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customeremailcommunication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_customeremailcommunication` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_customeremailcommunication_ToUserId` | [systemuser](systemuser.md) | `msdyn_touserid` | `msdyn_ToUserId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customeremailcommunication_SyncErrors` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `regardingobjectid` | `regardingobjectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_DuplicateMatchingRecord` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_DuplicateBaseRecord` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `baserecordid` | `baserecordid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_AsyncOperations` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `regardingobjectid` | `regardingobjectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_MailboxTrackingFolders` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `regardingobjectid` | `regardingobjectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_UserEntityInstanceDatas` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `objectid` | `objectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_ProcessSession` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `regardingobjectid` | `regardingobjectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_BulkDeleteFailures` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `regardingobjectid` | `regardingobjectid_msdyn_customeremailcommunication` |
| `msdyn_customeremailcommunication_PrincipalObjectAttributeAccesses` | [msdyn_customeremailcommunication](msdyn_customeremailcommunication.md) | `objectid` | `objectid_msdyn_customeremailcommunication` |


## Source

Generated from [msdyn_customeremailcommunication (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customeremailcommunication')) on 2026-05-07.