---
logical: "msdyn_casesuggestionrequestpayload"
display: "Payload di richiesta suggerimenti caso"
entitySetName: "msdyn_casesuggestionrequestpayloads"
primaryId: "msdyn_casesuggestionrequestpayloadid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Payload di richiesta suggerimenti caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesuggestionrequestpayload` |
| Display name | Payload di richiesta suggerimenti caso |
| Display (plural) | Payload di richiesta suggerimenti caso |
| Schema name | `msdyn_casesuggestionrequestpayload` |
| Entity set (Web API) | `msdyn_casesuggestionrequestpayloads` |
| Primary id attribute | `msdyn_casesuggestionrequestpayloadid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesuggestionrequestpayloads?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
POST /api/data/v9.2/msdyn_casesuggestionrequestpayloads
PATCH /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
DELETE /api/data/v9.2/msdyn_casesuggestionrequestpayloads(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_caseid`, `msdyn_casesuggestionrequestpayloadid`, `msdyn_name`, `msdyn_requestpayload`, `msdyn_responsepayload`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casesuggestionrequestpayload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casesuggestionrequestpayload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casesuggestionrequestpayload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casesuggestionrequestpayload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casesuggestionrequestpayload` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_incident_msdyn_casesuggestionrequestpayload_caseid` | [incident](incident.md) | `msdyn_caseid` | `msdyn_caseid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casesuggestionrequestpayload_SyncErrors` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_AsyncOperations` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_MailboxTrackingFolders` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_UserEntityInstanceDatas` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `objectid` | `objectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_ProcessSession` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_BulkDeleteFailures` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesuggestionrequestpayload` |
| `msdyn_casesuggestionrequestpayload_PrincipalObjectAttributeAccesses` | [msdyn_casesuggestionrequestpayload](msdyn_casesuggestionrequestpayload.md) | `objectid` | `objectid_msdyn_casesuggestionrequestpayload` |


## Source

Generated from [msdyn_casesuggestionrequestpayload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casesuggestionrequestpayload')) on 2026-05-07.