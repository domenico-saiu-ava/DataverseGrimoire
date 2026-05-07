---
logical: "msdyn_aiconfiguration_documenttemplate"
display: "msdyn_aiconfiguration_documenttemplate"
entitySetName: "msdyn_aiconfiguration_documenttemplateset"
primaryId: "msdyn_aiconfiguration_documenttemplateid"
tableType: "Standard"
ownership: "None"
---

# msdyn_aiconfiguration_documenttemplate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiconfiguration_documenttemplate` |
| Display name | msdyn_aiconfiguration_documenttemplate |
| Schema name | `msdyn_aiconfiguration_documenttemplate` |
| Entity set (Web API) | `msdyn_aiconfiguration_documenttemplateset` |
| Primary id attribute | `msdyn_aiconfiguration_documenttemplateid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset?$select=&$top=10
GET /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
POST /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset
PATCH /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
DELETE /api/data/v9.2/msdyn_aiconfiguration_documenttemplateset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `msdyn_aiconfiguration_documenttemplateId`, `msdyn_aiconfigurationid`, `msdyn_aidocumenttemplateid`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_aiconfiguration_documenttemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiconfiguration_documenttemplate.md) on 2026-05-06.