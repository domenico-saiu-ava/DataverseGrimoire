---
logical: "msdyn_rtestructuredtemplate"
display: "Modello strutturato RTE"
entitySetName: "msdyn_rtestructuredtemplates"
primaryId: "msdyn_rtestructuredtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello strutturato RTE

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rtestructuredtemplate` |
| Display name | Modello strutturato RTE |
| Display (plural) | Modelli strutturati RTE |
| Schema name | `msdyn_rtestructuredtemplate` |
| Entity set (Web API) | `msdyn_rtestructuredtemplates` |
| Primary id attribute | `msdyn_rtestructuredtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rtestructuredtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rtestructuredtemplates(<guid>)
POST /api/data/v9.2/msdyn_rtestructuredtemplates
PATCH /api/data/v9.2/msdyn_rtestructuredtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_rtestructuredtemplates(<guid>)
```

## Attributes

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_language`, `msdyn_name`, `msdyn_rtestructuredtemplateid`, `msdyn_sample`, `msdyn_sampleoutput`, `msdyn_structuringprompt`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rtestructuredtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rtestructuredtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rtestructuredtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rtestructuredtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_rtestructuredtemplate` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rtestructuredtemplate_SyncErrors` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_DuplicateMatchingRecord` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_DuplicateBaseRecord` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `baserecordid` | `baserecordid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_AsyncOperations` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_MailboxTrackingFolders` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_UserEntityInstanceDatas` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `objectid` | `objectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_ProcessSession` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_BulkDeleteFailures` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_rtestructuredtemplate` |
| `msdyn_rtestructuredtemplate_PrincipalObjectAttributeAccesses` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `objectid` | `objectid_msdyn_rtestructuredtemplate` |
| `msdyn_msdyn_rtestructuredtemplate_msdyn_rtetemplatemapping_rtestructuredtemplate` | [msdyn_rtestructuredtemplate](msdyn_rtestructuredtemplate.md) | `msdyn_rtestructuredtemplate` | `msdyn_rtestructuredtemplate` |


## Source

Generated from [msdyn_rtestructuredtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rtestructuredtemplate')) on 2026-05-07.